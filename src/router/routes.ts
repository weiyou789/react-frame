
import React from 'react'
import Layout from '@/layout'
export interface IRouteBase{
    path: string// 路由路径
    component?: any,// 路由组件
    exact?:boolean,
    strict?:any,// 302 跳转
    redirect?: string
    meta: IRouteMeta// 路由信息
    isLazy?:boolean// 是否需要懒加载，默认为true，布局组件一定要设置为false
    
}

export interface IRouteMeta {
    title?: string
    icon?: string,
    isMenu?: boolean,
    showMenuAs?: string
    titleFuc?: Function
}

export interface IRoute extends IRouteBase {
    children?: IRoute[]
}

const router:IRoute[] = [
    {
        path: '/',
        exact: true,
        meta: {
            title: '测试'
        },
        isLazy:false,
        component:Layout
    },
    {
        path: '/oneMenu',
        isLazy:false,
        component: Layout,
        meta: {
            title: '一级菜单',
            icon: 'iconfacility_manage',
            isMenu: true
        },
        children: [
            {
                path: '/oneMenu/twoMenu1',
                meta: {
                    title: '二级菜单1'
                },
                component: () => import('../views/test'),
                
            },
            {
                path: '/oneMenu/twoMenu2',
                meta: {
                    title: '二级菜单2'
                },
                component: () => import('../views/test1'),
                
            },
        ]
    },
    {
        path: '/oneMenu1',
        isLazy:false,
        component: Layout,
        meta: {
            title: '一级菜单1',
            icon: 'iconfacility_manage',
            isMenu: true
        },
        children: [
            {
                path: '/oneMenu1/twoMenu1',
                meta: {
                    title: '二级菜单1'
                },
                component: () => import('../views/test2'),
                
            },
            {
                path: '/oneMenu1/twoMenu2',
                meta: {
                    title: '二级菜单2'
                },
                component: () => import('../views/test3'),
                
            },
        ]
    }
];

export {
    router
}
