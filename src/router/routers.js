import { lazy } from 'react';

const config = [
    {
        path: '/',
        exact: true,
        meta: {
            title: '首页'
        },
        component: lazy(() => import('../views/homePage')), // 懒加载 路由组件
    },
    {
        path: '/wxauth',
        exact: true,
        meta: {
            title: '企业微信'
        },
        component: lazy(() => import('../views/wxauthPage')), // 懒加载 路由组件
    },
    {
        path: '/test', // 路由路径
        exact: true,
        meta: {
            title: 'test'
        },
        component: lazy(() => import('../views/test')), // 懒加载 路由组件
    },
    {
        path: '/createProject', // 路由路径
        exact: true,
        meta: {
            title: '创建工程项目'
        },
        component: lazy(() => import('../views/createProject')), // 懒加载 路由组件
    }
];

export default config;
