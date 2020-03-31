const config = [
    {
        path: '/',
        exact: true,
        meta: {
            title: '测试'
        },
        component: () => import('../views/test'),
    },
    {
        path: '/test2',
        meta: {
            title: '嵌套路由'
        },
        component: () => import('../views/test2'),
    }
];

export default config;
