import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

import { IRoute, IRouteMeta } from '@/router/routes'
import { CommonIconFont } from '../../utils'
import styles from './index.module.scss'

function renderTitle (meta: IRouteMeta) {
    return (
        <span className="menu-item__inner">
            {meta.icon && <CommonIconFont className={styles['menu-item__inner--icon']} type={meta.icon}></CommonIconFont>}
            <span className="menu-item__inner--label"> {meta.title} </span>
        </span>
    )
}

function renderMenuRoute (menu: IRoute) {
    return (
        <Menu.Item key={menu.path}>
            <Link to={menu.path}>{renderTitle(menu.meta)}</Link>
        </Menu.Item>
    )

}

function renderSubMenu (menu: IRoute) {
    return (
        <Menu.SubMenu title={renderTitle(menu.meta)} key={menu.path}>
            {
                // eslint-disable-next-line array-callback-return
                menu.children!.map((item: IRoute) => {
                    if (item.meta.isMenu || item.meta.isMenu === undefined) {
                        return item.children ? renderSubMenu(item) : renderMenuRoute(item)
                    }
                })
            }
        </Menu.SubMenu>
    )
}

function renderMenu (menu: IRoute) {
    // console.log(menu)
    if (menu && menu.meta && !menu.meta.isMenu) {
        return null
    }
    if (menu.children) {
        return renderSubMenu(menu)
    }

    return renderMenuRoute(menu)
}

export default renderMenu
