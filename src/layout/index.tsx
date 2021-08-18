import React, { Suspense } from 'react'
import { Layout, Spin } from 'antd'

import Header from '@/components/NavMenuHead/index'
import Sidebar from '@/components/NavMenuAside/index'
import Breadcrumbs from '@/components/Breadcrumb/index'

import styles from './index.module.scss'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface LayoutProps {
    // layout: Settings['layout']
    colorWeak: boolean
    fixedHeader: boolean
    // contentWidth: Settings['contentWidth']
}

const LayoutContent = (props: any) => {

    console.log(props)

    return (
        <Layout>
            <Header></Header>
            <Layout>
                <Sidebar></Sidebar>
                <Layout>
                    <Breadcrumbs></Breadcrumbs>
                    <Layout.Content className={styles['layout-content']}>
                        <div className={styles['main-pages']}>
                            {props.children}
                        </div>
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout >
    )
}

export default LayoutContent
