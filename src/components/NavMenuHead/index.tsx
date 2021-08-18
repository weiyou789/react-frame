import React, { memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Dropdown, Menu, Avatar } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'
import classnames from 'classnames'
import { CommonIconFont } from '../../utils'
import styles from './index.module.scss'
import { useState } from 'react'

interface LayoutHeaderProps {
    // fixedHeader: boolean
    // contentWidth: Settings['contentWidth']
    // layout: Settings['layout']
    // sidebar: AppState['sidebar']
    // theme: Settings['theme']
}



const Header = (props: LayoutHeaderProps) => {
    // const { userInfo, projectList }: GlobalState = useSelector((store: any) => store.global)
    // const history = useHistory()
    // const [projectName, setProjectName] = useState(projectList[0].projectName)

    // useEffect(() => {
    //     console.log(projectList)
    // }, [userInfo, projectList])

    // const onChangeProject = (projectId: string) => {
    //     setProjectName(projectId)
    // }

    // const onLogout = () => {
    //     sessionStorage.clear()
    //     history.push('/login')
    // }

    const projectList = [{
        projectId:1,
        projectName:'菜单1'
    }]

    const menu = (
        <Menu>
            {
                projectList.map(item => {
                    return (
                        <Menu.Item key={item.projectId}>{item.projectName}</Menu.Item>
                    )
                })
            }
        </Menu>
    )

    return (
        <header className={classnames(styles['layout-header'])}>
            <div className={classnames(styles['layout-header__left'])}>
                <div className={classnames(styles['header-logo'])}></div>
                <div className={classnames(styles['header-text'])}>
                    <div className={classnames(styles['header-text__project'])}>测试1</div>
                    <div className={classnames(styles['header-text__name'])}>智慧节能平台</div>
                </div>
            </div>
            <div className={classnames(styles['layout-header__right'])}>
                <div className={classnames(styles['header-project'])}>
                    <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" overlayClassName={classnames(styles['header-project__dropdown'])}>
                        <span onClick={e => e.preventDefault()}>
                            <span className={classnames(styles['header-project__name'])}>项目切换</span><DownOutlined />
                        </span>
                    </Dropdown>
                </div>
                <div className={classnames(styles['header-info'])}>
                    <Avatar size={24} style={{ backgroundColor: '#D8D8D8' }} icon={<UserOutlined />} />
                    <span className={classnames(styles['header-info__text'])}>姓名1/好享家</span>
                </div>
                <div className={classnames(styles['header-logout'])}>
                    <CommonIconFont className={classnames(styles['header-logout__icon'])} type={'iconlogout'} ></CommonIconFont>
                    <span className={classnames(styles['header-logout__text'])}>退出</span>
                </div>
            </div>
        </header >
    )
}

export default memo(Header)
