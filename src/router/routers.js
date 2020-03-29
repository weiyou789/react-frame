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
            title: '企业授权'
        },
        component: lazy(() => import('../views/wxauthPage')), // 懒加载 路由组件
    },
    {
        path: '/addBusiness',
        exact: true,
        meta: {
            title: '创建企业'
        },
        component: lazy(() => import('../views/addBusiness')), // 懒加载 路由组件
    },
    {
        path: '/authBusiness',
        exact: true,
        meta: {
            title: '认证企业'
        },
        component: lazy(() => import('../views/authBusiness')), // 懒加载 路由组件
    },
    {
        path: '/addCustomer',
        exact: true,
        meta: {
            title: '创建客户'
        },
        component: lazy(() => import('../views/addCustomer')), // 懒加载 路由组件
    },,
    {
        path: '/customer',
        exact: true,
        meta: {
            title: '客户详情'
        },
        component: lazy(() => import('../views/customerDetail')), // 懒加载 路由组件
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
    },
    {
        path: '/approvePage', // 路由路径
        exact: true,
        meta: {
            title: '审批列表'
        },
        component: lazy(() => import('../views/approvePage')), // 懒加载 路由组件
    }
];

export default config;
