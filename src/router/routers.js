import { lazy } from 'react';
import layout from '../layout/layout';

const config = [
    // {
    //     path: '/',
    //     component: layout, // 空白页布局
    //     meta: {
    //         title: '首页',
    //         icon: 'xx'
    //     },
    //     children: [
    //         // 子菜单路由
    //         {
    //             path: '/test', // 路由路径
    //             isMenu: false,
    //             meta: {
    //                 title: 'test',
    //                 icon: 'xxx'
    //             },
    //             component: lazy(() => import('../views/test')), // 懒加载 路由组件
    //         }
    //     ],
    // },
    {
        path: '/',
        meta: {
            title: '首页',
            icon: 'xx'
        },
        component: lazy(() => import('../views/homePage')), // 懒加载 路由组件
    },
    {
        path: '/test', // 路由路径
        meta: {
            title: 'test',
            icon: 'xxx'
        },
        component: lazy(() => import('../views/test')), // 懒加载 路由组件
    }
];

export default config;
