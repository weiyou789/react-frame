import { IRoute, router } from './routes'

let routerObj: { [key: string]: IRoute } = {} // 路由对象


function findRoutesByPaths (pathList: string[], routeList: IRoute[]): IRoute[] {
    let res: IRoute[] = []
    getComs(routeList)
    for (let index = 0; index < pathList.length; index++) {
        let item = pathList[index]
        res.push(routerObj[item])
    }

    return res
}

// 把路由list转换为平铺的对象，通过路由path找到该对象属性
function getComs (list: any[]) {
    for (let index = 0; index < list.length; index++) {
        let item = list[index]
        routerObj[item.path] = item
        if (item.children && item.children.length > 0) {
            getComs(item.children)
        }
    }
}


export function getPagePathList (pathname?: string): string[] {
    let res: any
    res = (pathname || window.location.pathname)
        .split('/')
        .filter(Boolean)
        .map((value, index, array) => '/'.concat(array.slice(0, index + 1).join('/')))
    return res
}

/**
 * 只有业务路由会有面包屑
 */
export function getBreadcrumbs (): IRoute[] {
    let res = findRoutesByPaths(getPagePathList(), router)
    return res
}
