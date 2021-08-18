import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import classnames from 'classnames'

import { IRoute } from '../../router/routes'
import { getBreadcrumbs } from '../../router/index'
import { CommonIconFont } from '../../utils'
import styles from './index.module.scss'

const Breadcrumbs = (props: any) => {
    const [breadcrumbs, setBreadcrumbs] = useState<IRoute[]>([])

    // const history = useHistory()
    const { pathname } = props.location

    useEffect(() => {
        setBreadcrumbs(getBreadcrumbs())
        /*
        const unListen = history.listen(() => {
            setBreadcrumbs(getBreadcrumbs())
        })

        return () => {
            unListen()
        }
        */
    }, [pathname])

    const getByTitle = (route: any) => {
        console.log('🚀 --- getByTitle --- route', route)

        if (route.meta && route.meta.titleFuc) {
            let res = route.meta.titleFuc(window.history)
            if (res) {
                return res
            }
            return route.meta.title
        }
        return route.meta.title

    }

    return (
        <div className={classnames(styles['layout-breadcrumb'])}>

            <Breadcrumb separator=">">
                {
                    breadcrumbs.map(
                        (route: IRoute) => {
                            return (
                                <Breadcrumb.Item key={route.path}>
                                    {
                                        route.meta.icon && <CommonIconFont className={styles['layout-breadcrumb__icon']} type={route.meta.icon}></CommonIconFont>
                                    }
                                    {getByTitle(route)}
                                </Breadcrumb.Item>
                            )
                        }
                    )
                }
            </Breadcrumb>
        </div >
    )
}

export default withRouter(Breadcrumbs)
