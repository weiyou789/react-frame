/**
 * 配置访问后端接口的域名端口
 */
let interfaceUrl = ''

var env = process.env.NODE_ENV === 'development' ? 'development' : (process.env.REACT_APP_ENV === 'dev' ?
    'dev' : process.env.REACT_APP_ENV === 'test' ? 'test' : process.env.REACT_APP_ENV === 'preview' ? 'preview' : 'production')
switch (env) {
    case 'development':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:4832/'
        break
    case 'dev':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:4832/'
        break
    case 'test':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:48887/'
        break
    case 'preview':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:48888/'
        break
    case 'production':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:48889/'
        break
    default:
        console.log(0)
        break
}
export {
    interfaceUrl
}