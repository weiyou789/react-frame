import React, { useEffect } from 'react'
import classnames from 'classnames'
import { Menu, Layout } from 'antd'
import { withRouter } from 'react-router-dom'

import renderMenu from '../SideMenu'
import { CommonIconFont } from '../../utils'
import { IRoute, router } from '../../router/routes'
import styles from './index.module.scss'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface LayoutHeaderProps {
    // sidebar: AppState['sidebar']
    // routes: AppState['routes']
    // init: boolean
}

const Sidebar = (props: any) => {
    const inlineCollapsed: {
        inlineCollapsed?: boolean
    } = {}

    inlineCollapsed.inlineCollapsed = false

    // const { pathname } = window.location
    const { pathname } = props.location
    const [openKeys, setOpenKeys] = React.useState<string[]>([''])
    let rootSubmenuKeys = React.useRef<string[]>([])
    let [selectedKeys, setSelectedKeys] = React.useState<string[]>([pathname])

    useEffect(() => {
        router.filter(item => (item.meta.isMenu || item.meta.isMenu === undefined)).forEach((item: any) => {
            rootSubmenuKeys.current.push(item.path)
        })
        rootSubmenuKeys.current = rootSubmenuKeys.current.filter(Boolean)
        // console.log('一级路由', rootSubmenuKeys.current)
    }, [])

    // 将 tree 转换成 arr 的形式
    const treeToArray = (tree: IRoute[]) => {
        let arr: IRoute[] = []
        const expanded = (datas: any) => {
            if (datas && datas.length > 0) {
                datas.forEach((e: any) => {
                    arr.push(e)
                    expanded(e.children)
                })
            }
        }
        expanded(tree)
        return arr
    }


    useEffect(() => {

        let arr = treeToArray(router)
        let temp = arr.filter(item => {
            return item.path === pathname
        })

        if (temp && temp[0] && temp[0].meta.isMenu === false) {
            setSelectedKeys([temp[0].meta.showMenuAs] as string[]) //以 showMenuAs 设置路由高亮
        } else {
            setSelectedKeys([pathname]) //设置路由高亮

        }


        // 以下设置打开某个菜单tab
        let pathRes: string[] = []
        let initPath = pathname.split('/').filter(Boolean)
        initPath.forEach((item: string) => {
            pathRes.push(`/${item}`)
        })
        if (initPath.length === 3) {
            let temp = initPath.map((value: any, index: any, array: any) => '/'.concat(array.slice(0, index + 1).join('/')))
            setOpenKeys([temp[0], temp[1]])
        } else {
            setOpenKeys([pathRes[0]])
        }

    }, [pathname])

    const onOpenChange = (keys: any) => {
        const latestOpenKey = keys[keys.length - 1]
        if (rootSubmenuKeys.current.indexOf(latestOpenKey) === -1) {
            if (keys.length === 3) {
                setOpenKeys([keys[0], keys[2]])
            } else {
                setOpenKeys(keys)
            }
        } else {
            // 一级菜单
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    }

    const handleClick = (item: any) => {
        setSelectedKeys([item.key])
    }

    return (
        <Layout.Sider className={classnames(styles['layout-aside'])} >
            <div className={classnames(styles['layout-aside__menu'])}>
                <Menu style={{ height: '100%', borderRight: 0 }}
                    // theme="dark"
                    className={classnames(styles['aside-menu__theme'])}
                    openKeys={openKeys} // sub1
                    selectedKeys={selectedKeys} // sub1-item
                    onOpenChange={onOpenChange}
                    onClick={handleClick}
                    mode={'inline'} {...inlineCollapsed}
                >
                    {/* 勿删，可注释 */}
                    {/* <Menu.Item key='/home'>
                        <Link to='/'>首页</Link>
                    </Menu.Item> */}
                    {
                        router.filter(item => (item.meta.isMenu || item.meta.isMenu === undefined)).map((menu: IRoute) => renderMenu(menu))
                    }
                </Menu>
            </div>
            <div className={classnames(styles['layout-aside__menu--switch'])}>
                <div className={classnames(styles['aside-menu__switch'])}>
                    <CommonIconFont className={styles['aside-menu__switch--icon']} type={'iconmenu_switch'}></CommonIconFont>
                    <span className={classnames(styles['aside-menu__switch--text'])} onClick={() => (inlineCollapsed.inlineCollapsed = !inlineCollapsed.inlineCollapsed)}>{inlineCollapsed.inlineCollapsed ? '展开' : '收起'}</span>
                </div>
            </div>
        </Layout.Sider>
    )
}

export default withRouter(Sidebar)

