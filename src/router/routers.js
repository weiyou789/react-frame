import { lazy } from 'react';
import layout from '../components/layout';

const config = [
    {
        path: '/',
        // redirect: '/dashborad/intro',
        component: layout, // 空白页布局
        meta: {
            title: '首页',
            icon: 'xx'
        },
        children: [
            // 子菜单路由
            {
                path: '/z', // 路由路径
                isMenu: false,
                meta: {
                    title: 'z',
                    icon: 'xxx'
                },
                component: lazy(() => import('../views/z')), // 懒加载 路由组件
            }

        ],
    },
];

export default config;
