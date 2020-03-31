/**
 * 配置访问后端接口的域名端口
 */
let interfaceUrl = ''
let ccpUrl = ''

var env = process.env.NODE_ENV === 'development' ? 'development' : (process.env.REACT_APP_ENV === 'dev' ?
    'dev' : process.env.REACT_APP_ENV === 'test' ? 'test' : process.env.REACT_APP_ENV === 'preview' ? 'preview' : 'production')
switch (env) {
    case 'development':
        ccpUrl = 'https://testccp.hosjoy.com:4832'
        interfaceUrl = 'http://192.168.20.248:40601'
        break
    case 'dev':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:4832/'
        ccpUrl = 'https://testccp.hosjoy.com:4832'
        break
    case 'test':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:48887/'
        ccpUrl = 'https://testccp.hosjoy.com:4832'
        break
    case 'preview':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:48888/'
        ccpUrl = 'https://testccp.hosjoy.com:4832'
        break
    case 'production':
        interfaceUrl = 'https://testb2b-gateway.hosjoy.com:48889/'
        ccpUrl = 'https://testccp.hosjoy.com:4832'
        break
    default:
        console.log(0)
        break
}
export {
    interfaceUrl,
    ccpUrl
}
