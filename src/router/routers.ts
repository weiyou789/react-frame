
export interface IRouteBase{
    // 路由路径
    path: string
    // 路由组件
    component?: any,
    exact?:boolean,
    strict?:any,
    // 302 跳转
    redirect?: string
    // 路由信息
    meta: IRouteMeta
    // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
}

export interface IRouteMeta {
    title?: string
    icon?: string,
    isMenu?: boolean
}

export interface IRoute extends IRouteBase {
    children?: IRoute[]
}

const config:IRoute[] = [
    {
        path: '/',
        exact: true,
        meta: {
            title: '测试'
        },
        component: () => import('../views/test'),
    },
    // {
    //     path: '/test2',
    //     meta: {
    //         title: '嵌套路由'
    //     },
    //     component: () => import('../views/test2'),
    // }
];

export default config;
