import layout from '../views/layout'
import message from '../components/message'

const routes = [
        {
            path: '/layout',
            exact: true,
            component: layout
        },
        {
            path: '/',
            component: layout,
            routes: [ // 嵌套路由
                {
                    path: '/message',
                    exact: true,
                    component: message,
                }
            ]
        }
    ]


export default routes;