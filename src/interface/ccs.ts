
/**
* 
* @export
* @interface RoomDeviceBindRequest
*/
export interface RoomDeviceBindRequest {
    
  /**
   * 设备id
   * @type {string}
   * @memberof RoomDeviceBindRequest
   */
  iotId: string

  /**
   * 子设备id 绑定子设备时必传
   * @type {string}
   * @memberof RoomDeviceBindRequest
   */
  subIotId?: string

  /**
   * 端点 绑定内机时必填
   * @type {string}
   * @memberof RoomDeviceBindRequest
   */
  endPoint?: string

  /**
   * 房间id
   * @type {number | string}
   * @memberof RoomDeviceBindRequest
   */
  roomId: number | string

}


/**
* 楼栋-楼层-房间树状结构
* @export
* @interface BuildingTreeResponse
*/
export interface BuildingTreeResponse {
  
  /**
   * 楼栋id
   * @type {number | string}
   * @memberof BuildingTreeResponse
   */
  buildingId: number | string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof BuildingTreeResponse
   */
  buildingName: string

  /**
   * 楼层列表
   * @type {Array<FloorTreeResponse>}
   * @memberof BuildingTreeResponse
   */
  floors: Array<FloorTreeResponse>

}


/**
* 楼层-房间树状结构
* @export
* @interface FloorTreeResponse
*/
export interface FloorTreeResponse {
  
  /**
   * 楼层id
   * @type {number | string}
   * @memberof FloorTreeResponse
   */
  floorId?: number | string

  /**
   * 楼层号
   * @type {number | string}
   * @memberof FloorTreeResponse
   */
  floorCode?: number | string

  /**
   * 房间列表
   * @type {Array<RoomTreeResponse>}
   * @memberof FloorTreeResponse
   */
  rooms?: Array<RoomTreeResponse>

}


/**
* 
* @export
* @interface ReqRole
*/
export interface ReqRole {
  
  /**
   * 角色id,更新和添加备注时必填
   * @type {number | string}
   * @memberof ReqRole
   */
  roleId: number | string

  /**
   * 角色名称
   * @type {string}
   * @memberof ReqRole
   */
  roleName: string

  /**
   * 备注
   * @type {string}
   * @memberof ReqRole
   */
  remark?: string

  /**
   * 菜单id列表,将勾选的所有菜单id全部传入,包括一二三级等所有级别的
   * @type {Array<number | string>}
   * @memberof ReqRole
   */
  allSelectedMenuIds?: Array<number | string>

  /**
   * 菜单叶子节点配置的菜单权限,只传叶子节点的配置
   * @type {Array<SensitivePermission>}
   * @memberof ReqRole
   */
  sensitivePermissions?: Array<SensitivePermission>

  /**
   * 前端不用传
   * @type {number | string}
   * @memberof ReqRole
   */
  projectId?: number | string

  /**
   * 前端不用传
   * @type {number | string}
   * @memberof ReqRole
   */
  operatorUserId?: number | string

}


/**
* 房间树状结构
* @export
* @interface RoomTreeResponse
*/
export interface RoomTreeResponse {
  
  /**
   * 房间id
   * @type {number | string}
   * @memberof RoomTreeResponse
   */
  roomId?: number | string

  /**
   * 房间名称
   * @type {string}
   * @memberof RoomTreeResponse
   */
  roomName?: string

}


/**
* 菜单叶子节点配置的菜单权限,只传叶子节点的配置
* @export
* @interface SensitivePermission
*/
export interface SensitivePermission {
  
  /**
   * 叶子节点菜单id
   * @type {number | string}
   * @memberof SensitivePermission
   */
  leafMenuId?: number | string

  /**
   * 勾选的敏感选项,10=敏感数据 20=敏感操作, 以数组传入
   * @type {Array<number | string>}
   * @memberof SensitivePermission
   */
  sensitiveOptions?: Array<number | string>

  /**
   * 配置的敏感操作id列表
   * @type {Array<number | string>}
   * @memberof SensitivePermission
   */
  elementIds?: Array<number | string>

  /**
   * 配置的敏感数据列表,即楼栋列表
   * @type {Array<BuildingTreeResponse>}
   * @memberof SensitivePermission
   */
  buildings?: Array<BuildingTreeResponse>

}


/**
* 
* @export
* @interface ReqUserLogin
*/
export interface ReqUserLogin {
  
  /**
   * 手机号
   * @type {string}
   * @memberof ReqUserLogin
   */
  phone: string

  /**
   * 密码,前端传入明文密码md5的32位大写,密码登录必填
   * @type {string}
   * @memberof ReqUserLogin
   */
  password: string

  /**
   * 验证码,验证码登录必填
   * @type {string}
   * @memberof ReqUserLogin
   */
  smsCode: string

}


/**
* 添加/修改房间请求
* @export
* @interface RoomRequest
*/
export interface RoomRequest {
  
  /**
   * 房间id
   * @type {number | string}
   * @memberof RoomRequest
   */
  id: number | string

  /**
   * 所属楼层id
   * @type {number | string}
   * @memberof RoomRequest
   */
  floorId: number | string

  /**
   * 房间名称
   * @type {string}
   * @memberof RoomRequest
   */
  roomName: string

  /**
   * 
   * @type {string}
   * @memberof RoomRequest
   */
  createBy: string

  /**
   * 
   * @type {string}
   * @memberof RoomRequest
   */
  updateBy: string

}


/**
* 项目包含设备列表
* @export
* @interface DeviceType
*/
export interface DeviceType {
  
  /**
   * 管理员手机号
   * @type {string}
   * @memberof DeviceType
   */
  deviceTypeCode: string

  /**
   * 管理员手机号
   * @type {string}
   * @memberof DeviceType
   */
  deviceTypeName: string

}


/**
* 新增项目请求参数实体
* @export
* @interface ProjectRequest
*/
export interface ProjectRequest {
  
  /**
   * id
   * @type {number | string}
   * @memberof ProjectRequest
   */
  id: number | string

  /**
   * 项目全称
   * @type {string}
   * @memberof ProjectRequest
   */
  projectName: string

  /**
   * 项目简称
   * @type {string}
   * @memberof ProjectRequest
   */
  projectSimpleName: string

  /**
   * 省id
   * @type {string}
   * @memberof ProjectRequest
   */
  provinceId: string

  /**
   * 省名称
   * @type {string}
   * @memberof ProjectRequest
   */
  provinceName: string

  /**
   * 市id
   * @type {string}
   * @memberof ProjectRequest
   */
  cityId: string

  /**
   * 市名称
   * @type {string}
   * @memberof ProjectRequest
   */
  cityName: string

  /**
   * 区id
   * @type {string}
   * @memberof ProjectRequest
   */
  countryId: string

  /**
   * 区名称
   * @type {string}
   * @memberof ProjectRequest
   */
  countryName: string

  /**
   * 详细地址
   * @type {string}
   * @memberof ProjectRequest
   */
  address: string

  /**
   * 企业名称
   * @type {string}
   * @memberof ProjectRequest
   */
  companyName: string

  /**
   * 管理员姓名
   * @type {string}
   * @memberof ProjectRequest
   */
  adminName: string

  /**
   * 管理员手机号
   * @type {string}
   * @memberof ProjectRequest
   */
  username: string

  /**
   * 创建人 当前登录用户
   * @type {string}
   * @memberof ProjectRequest
   */
  createBy: string

  /**
   * 修改人
   * @type {string}
   * @memberof ProjectRequest
   */
  updateBy: string

  /**
   * 项目类型 英文逗号隔开 1氟机空调集控系统，2水机空调集控系统，3计费系统
   * @type {Array<string>}
   * @memberof ProjectRequest
   */
  projectType: Array<string>

  /**
   * 项目包含设备列表
   * @type {Array<DeviceType>}
   * @memberof ProjectRequest
   */
  deviceTypes: Array<DeviceType>

}


/**
* 
* @export
* @interface ReqMenu
*/
export interface ReqMenu {
  
  /**
   * 菜单id,编辑时必传
   * @type {number | string}
   * @memberof ReqMenu
   */
  menuId: number | string

  /**
   * 菜单名称
   * @type {string}
   * @memberof ReqMenu
   */
  menuName: string

  /**
   * 菜单名称
   * @type {string}
   * @memberof ReqMenu
   */
  uri?: string

  /**
   * 父级菜单id,根节点传0
   * @type {number | string}
   * @memberof ReqMenu
   */
  parentId: number | string

  /**
   * 项目类型,1=氟机空调集控系统,2=水机空调集控系统,3=计费系统 
   * @type {number | string}
   * @memberof ReqMenu
   */
  projectType?: number | string

  /**
   * 包含的可选敏感选项,10=敏感数据 20=敏感操作
   * @type {Array<number | string>}
   * @memberof ReqMenu
   */
  sensitiveOptions?: Array<number | string>

  /**
   * 当前菜单下关联的后端接口列表,叶子节点可传
   * @type {Array<string>}
   * @memberof ReqMenu
   */
  apiPaths?: Array<string>

  /**
   * 操作人
   * @type {string}
   * @memberof ReqMenu
   */
  operateUser?: string

}


/**
* 
* @export
* @interface BuildingRequest
*/
export interface BuildingRequest {
  
  /**
   * 
   * @type {number | string}
   * @memberof BuildingRequest
   */
  id: number | string

  /**
   * 项目id
   * @type {number | string}
   * @memberof BuildingRequest
   */
  projectId: number | string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof BuildingRequest
   */
  buildingName: string

  /**
   * 最底层
   * @type {number | string}
   * @memberof BuildingRequest
   */
  lowestFloor: number | string

  /**
   * 最高层
   * @type {number | string}
   * @memberof BuildingRequest
   */
  maxFloor: number | string

  /**
   * 创建人
   * @type {string}
   * @memberof BuildingRequest
   */
  createBy: string

  /**
   * 修改人
   * @type {string}
   * @memberof BuildingRequest
   */
  updateBy: string

}


/**
* 
* @export
* @interface RelatedDeviceRequest
*/
export interface RelatedDeviceRequest {
  
  /**
   * 关联设备id
   * @type {number | string}
   * @memberof RelatedDeviceRequest
   */
  id: number | string

  /**
   * 一级设备id
   * @type {string}
   * @memberof RelatedDeviceRequest
   */
  iotId: string

  /**
   * 子设备id
   * @type {string}
   * @memberof RelatedDeviceRequest
   */
  subIotId: string

  /**
   * 关联类型  1外机 2内机
   * @type {number | string}
   * @memberof RelatedDeviceRequest
   */
  relatedType: number | string

  /**
   * 关联设备 外机为输入值，内机为','隔开的子设备id_端点
   * @type {string}
   * @memberof RelatedDeviceRequest
   */
  relatedDevice?: string

}


/**
* 
* @export
* @interface ReqUser
*/
export interface ReqUser {
  
  /**
   * 用户id,更新时必填
   * @type {number | string}
   * @memberof ReqUser
   */
  userId: number | string

  /**
   * 前端不用传,新增管理员时必传,其余从header中获取
   * @type {number | string}
   * @memberof ReqUser
   */
  projectId: number | string

  /**
   * 用户姓名
   * @type {string}
   * @memberof ReqUser
   */
  userName: string

  /**
   * 手机号
   * @type {string}
   * @memberof ReqUser
   */
  phone: string

  /**
   * 备注
   * @type {string}
   * @memberof ReqUser
   */
  remark?: string

  /**
   * 岗位的id列表
   * @type {Array<number | string>}
   * @memberof ReqUser
   */
  roleIdList: Array<number | string>

}


/**
* 
* @export
* @interface ReqResetAirSwitchWarning
*/
export interface ReqResetAirSwitchWarning {
  
  /**
   * 
   * @type {number | string}
   * @memberof ReqResetAirSwitchWarning
   */
  id?: number | string

}


/**
* 
* @export
* @interface ReqSms
*/
export interface ReqSms {
  
  /**
   * 手机号
   * @type {string}
   * @memberof ReqSms
   */
  phone: string

  /**
   * 发短信类型,1=验证码登录 2=修改密码
   * @type {number | string}
   * @memberof ReqSms
   */
  smsType: number | string

}


/**
* 
* @export
* @interface ProjectDeviceBindRequest
*/
export interface ProjectDeviceBindRequest {
  
  /**
   * 项目id
   * @type {number | string}
   * @memberof ProjectDeviceBindRequest
   */
  projectId: number | string

  /**
   * 设备id
   * @type {string}
   * @memberof ProjectDeviceBindRequest
   */
  iotId: string

  /**
   * 房间id
   * @type {number | string}
   * @memberof ProjectDeviceBindRequest
   */
  roomId?: number | string

}


/**
* 该用户可展示的菜单下的敏感元素,只有叶子菜单有
* @export
* @interface Element
*/
export interface Element {
  
  /**
   * 后端保存的页面元素id
   * @type {number | string}
   * @memberof Element
   */
  elementId: number | string

  /**
   * 前端元素key,由前端提供,前端根据此key确定对应的元素
   * @type {string}
   * @memberof Element
   */
  elementKey: string

  /**
   * 元素名称
   * @type {string}
   * @memberof Element
   */
  elementName: string

}


/**
* 
* @export
* @interface RespLogin
*/
export interface RespLogin {
  
  /**
   * 项目列表,默认取列表第一个展示
   * @type {Array<RespProject>}
   * @memberof RespLogin
   */
  projectList: Array<RespProject>

  /**
   * 菜单列表
   * @type {Array<RespMenu>}
   * @memberof RespLogin
   */
  menuList: Array<RespMenu>

  /**
   * 
   * @type {UserInfo}
   * @memberof RespLogin
   */
  userInfo: UserInfo

  /**
   * 
   * @type {RespMqtt}
   * @memberof RespLogin
   */
  mqttInfo: RespMqtt

  /**
   * 
   * @type {RespToken}
   * @memberof RespLogin
   */
  tokenInfo: RespToken

}


/**
* 菜单列表
* @export
* @interface RespMenu
*/
export interface RespMenu {
  
  /**
   * 后端的菜单id
   * @type {number | string}
   * @memberof RespMenu
   */
  menuId: number | string

  /**
   * 菜单名称
   * @type {string}
   * @memberof RespMenu
   */
  menuName: string

  /**
   * 菜单跳转页面路径uri,只有叶子节点有
   * @type {string}
   * @memberof RespMenu
   */
  menuUri: string

  /**
   * 是否是叶子节点,1=是 0=否
   * @type {number | string}
   * @memberof RespMenu
   */
  isLeaf: number | string

  /**
   * 排序
   * @type {number | string}
   * @memberof RespMenu
   */
  sort: number | string

  /**
   * 子菜单列表
   * @type {Array<RespMenu>}
   * @memberof RespMenu
   */
  childMenus: Array<RespMenu>

  /**
   * 该用户可展示的菜单下的敏感元素,只有叶子菜单有
   * @type {Array<Element>}
   * @memberof RespMenu
   */
  showElements: Array<Element>

  /**
   * 角色配置权限时,可供勾选的敏感权限选项
   * @type {Array<number | string>}
   * @memberof RespMenu
   */
  sensitiveSelectOptions: Array<number | string>

}


/**
* mqtt连接信息,用于连接设备
* @export
* @interface RespMqtt
*/
export interface RespMqtt {
  
  /**
   * mqtt用户名
   * @type {string}
   * @memberof RespMqtt
   */
  mqttUser?: string

  /**
   * mqtt用密码
   * @type {string}
   * @memberof RespMqtt
   */
  mqttPwd?: string

  /**
   * mqtt连接协议tcp/tls
   * @type {string}
   * @memberof RespMqtt
   */
  protocol?: string

  /**
   * mqtt连接地址
   * @type {string}
   * @memberof RespMqtt
   */
  address?: string

  /**
   * mqtt连接端口
   * @type {string}
   * @memberof RespMqtt
   */
  port?: string

}


/**
* 项目列表,默认取列表第一个展示
* @export
* @interface RespProject
*/
export interface RespProject {
  
  /**
   * 项目id
   * @type {number | string}
   * @memberof RespProject
   */
  projectId?: number | string

  /**
   * 项目名称
   * @type {string}
   * @memberof RespProject
   */
  projectName?: string

}


/**
* 登录token信息
* @export
* @interface RespToken
*/
export interface RespToken {
  
  /**
   * accessToken,前端做缓存,调接口时需将其放入header中
   * @type {string}
   * @memberof RespToken
   */
  accessToken: string

  /**
   * refreshToken,前端缓存到本地
   * @type {string}
   * @memberof RespToken
   */
  refreshToken: string

}


/**
* 用户信息,取需要的字段展示,不需要的不用管
* @export
* @interface UserInfo
*/
export interface UserInfo {
  
  /**
   * 
   * @type {number | string}
   * @memberof UserInfo
   */
  userId?: number | string

  /**
   * 
   * @type {string}
   * @memberof UserInfo
   */
  userName?: string

}


/**
* 
* @export
* @interface ElectricPriceDuration
*/
export interface ElectricPriceDuration {
  
  /**
   * 
   * @type {LocalTime}
   * @memberof ElectricPriceDuration
   */
  startTime?: LocalTime

  /**
   * 
   * @type {LocalTime}
   * @memberof ElectricPriceDuration
   */
  endTime?: LocalTime

  /**
   * 
   * @type {number | string}
   * @memberof ElectricPriceDuration
   */
  price?: number | string

}


/**
* 
* @export
* @interface LocalTime
*/
export interface LocalTime {
  
  /**
   * 
   * @type {number | string}
   * @memberof LocalTime
   */
  hour?: number | string

  /**
   * 
   * @type {number | string}
   * @memberof LocalTime
   */
  minute?: number | string

  /**
   * 
   * @type {number | string}
   * @memberof LocalTime
   */
  second?: number | string

  /**
   * 
   * @type {number | string}
   * @memberof LocalTime
   */
  nano?: number | string

}


/**
* 
* @export
* @interface IPageRespAirSwitchWarning
*/
export interface IPageRespAirSwitchWarning {
  
  /**
   * 
   * @type {number | string}
   * @memberof IPageRespAirSwitchWarning
   */
  size: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespAirSwitchWarning
   */
  current: number | string

  /**
   * 
   * @type {boolean}
   * @memberof IPageRespAirSwitchWarning
   */
  searchCount: boolean

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespAirSwitchWarning
   */
  total: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespAirSwitchWarning
   */
  pages: number | string

  /**
   * 
   * @type {Array<RespAirSwitchWarning>}
   * @memberof IPageRespAirSwitchWarning
   */
  records: Array<RespAirSwitchWarning>

  /**
   * 
   * @type {boolean}
   * @memberof IPageRespAirSwitchWarning
   */
  hitCount: boolean

}


/**
* 
* @export
* @interface RespAirSwitchWarning
*/
export interface RespAirSwitchWarning {
  
  /**
   * 条目id
   * @type {number | string}
   * @memberof RespAirSwitchWarning
   */
  id?: number | string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  buildingName?: string

  /**
   * 楼层名称
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  floorCode?: string

  /**
   * 房间名称
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  roomName?: string

  /**
   * 设备id
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  iotId?: string

  /**
   * 子设备id
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  subIotId?: string

  /**
   * 类型
   * @type {number | string}
   * @memberof RespAirSwitchWarning
   */
  type?: number | string

  /**
   * 最新告警时间
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  warningTime?: string

  /**
   * 告警类型
   * @type {object}
   * @memberof RespAirSwitchWarning
   */
  warningDetail?: object

  /**
   * 预警状态:0预警中,1已解除预警
   * @type {number | string}
   * @memberof RespAirSwitchWarning
   */
  handled?: number | string

  /**
   * 处理时间
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  handleTime?: string

  /**
   * 创建时间
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  createTime?: string

  /**
   * 更新时间
   * @type {string}
   * @memberof RespAirSwitchWarning
   */
  updateTime?: string

}


/**
* 
* @export
* @interface RespElectricStatisticsHeader
*/
export interface RespElectricStatisticsHeader {
  
  /**
   * 当日用电量
   * @type {number | string}
   * @memberof RespElectricStatisticsHeader
   */
  dayValue: number | string

  /**
   * 当周用电量
   * @type {number | string}
   * @memberof RespElectricStatisticsHeader
   */
  weekValue: number | string

  /**
   * 当月用电量
   * @type {number | string}
   * @memberof RespElectricStatisticsHeader
   */
  monthValue: number | string

  /**
   * 当年用电量
   * @type {number | string}
   * @memberof RespElectricStatisticsHeader
   */
  yearValue: number | string

  /**
   * 当日用电量环比昨日
   * @type {number | string}
   * @memberof RespElectricStatisticsHeader
   */
  dayRate: number | string

  /**
   * 当日用电量同比上周
   * @type {number | string}
   * @memberof RespElectricStatisticsHeader
   */
  weekRate: number | string

  /**
   * 当日用电量同比上月
   * @type {number | string}
   * @memberof RespElectricStatisticsHeader
   */
  monthRate: number | string

  /**
   * 当日用电量同比上年
   * @type {number | string}
   * @memberof RespElectricStatisticsHeader
   */
  yearRate: number | string

}


/**
* 
* @export
* @interface RespDevice
*/
export interface RespDevice {
  
  /**
   * 
   * @type {string}
   * @memberof RespDevice
   */
  iotId: string

  /**
   * 
   * @type {string}
   * @memberof RespDevice
   */
  subIotId: string

  /**
   * 
   * @type {number | string}
   * @memberof RespDevice
   */
  endpoint: number | string

  /**
   * 
   * @type {string}
   * @memberof RespDevice
   */
  type: string

  /**
   * 
   * @type {string}
   * @memberof RespDevice
   */
  buildingName: string

  /**
   * 
   * @type {string}
   * @memberof RespDevice
   */
  floorCode: string

  /**
   * 
   * @type {number | string}
   * @memberof RespDevice
   */
  roomId: number | string

  /**
   * 
   * @type {string}
   * @memberof RespDevice
   */
  roomName: string

  /**
   * 
   * @type {string}
   * @memberof RespDevice
   */
  status: string

  /**
   * 
   * @type {number | string}
   * @memberof RespDevice
   */
  projectId: number | string

}


/**
* 
* @export
* @interface PageParameterObject
*/
export interface PageParameterObject {
  
  /**
   * 
   * @type {number | string}
   * @memberof PageParameterObject
   */
  pageSize: number | string

  /**
   * 
   * @type {number | string}
   * @memberof PageParameterObject
   */
  pageNumber: number | string

  /**
   * 
   * @type {Array<string>}
   * @memberof PageParameterObject
   */
  sort: Array<string>

}


/**
* 
* @export
* @interface RespRoleOption
*/
export interface RespRoleOption {
  
  /**
   * 岗位id
   * @type {number | string}
   * @memberof RespRoleOption
   */
  roleId: number | string

  /**
   * 岗位名称
   * @type {string}
   * @memberof RespRoleOption
   */
  roleName: string

}


/**
* 
* @export
* @interface FirstDeviceResponse
*/
export interface FirstDeviceResponse {
  
  /**
   * 设备名称
   * @type {string}
   * @memberof FirstDeviceResponse
   */
  deviceName: string

  /**
   * 设备类型
   * @type {string}
   * @memberof FirstDeviceResponse
   */
  type: string

}


/**
* 
* @export
* @interface IPageProjectDeviceListResponse
*/
export interface IPageProjectDeviceListResponse {
  
  /**
   * 
   * @type {number | string}
   * @memberof IPageProjectDeviceListResponse
   */
  size: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageProjectDeviceListResponse
   */
  current: number | string

  /**
   * 
   * @type {boolean}
   * @memberof IPageProjectDeviceListResponse
   */
  searchCount: boolean

  /**
   * 
   * @type {number | string}
   * @memberof IPageProjectDeviceListResponse
   */
  total: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageProjectDeviceListResponse
   */
  pages: number | string

  /**
   * 
   * @type {Array<ProjectDeviceListResponse>}
   * @memberof IPageProjectDeviceListResponse
   */
  records: Array<ProjectDeviceListResponse>

  /**
   * 
   * @type {boolean}
   * @memberof IPageProjectDeviceListResponse
   */
  hitCount: boolean

}


/**
* 
* @export
* @interface ProjectDeviceListResponse
*/
export interface ProjectDeviceListResponse {
  
  /**
   * 
   * @type {string}
   * @memberof ProjectDeviceListResponse
   */
  iotId?: string

  /**
   * 
   * @type {string}
   * @memberof ProjectDeviceListResponse
   */
  netAddress?: string

  /**
   * 设备状态 1.在线,0.离线 2.不统计
   * @type {number | string}
   * @memberof ProjectDeviceListResponse
   */
  deviceStatus?: number | string

  /**
   * 子设备数量
   * @type {number | string}
   * @memberof ProjectDeviceListResponse
   */
  subDeviceCount?: number | string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof ProjectDeviceListResponse
   */
  buildingName?: string

  /**
   * 楼层编码
   * @type {string}
   * @memberof ProjectDeviceListResponse
   */
  floorName?: string

  /**
   * 房间名称
   * @type {string}
   * @memberof ProjectDeviceListResponse
   */
  roomName?: string

  /**
   * 设备类型
   * @type {string}
   * @memberof ProjectDeviceListResponse
   */
  type?: string

  /**
   * 设备名称
   * @type {string}
   * @memberof ProjectDeviceListResponse
   */
  deviceName?: string

  /**
   * 房间id
   * @type {number | string}
   * @memberof ProjectDeviceListResponse
   */
  roomId?: number | string

}


/**
* 
* @export
* @interface DeviceDetailResponse
*/
export interface DeviceDetailResponse {
  
  /**
   * 设备类型名称
   * @type {string}
   * @memberof DeviceDetailResponse
   */
  typeName?: string

  /**
   * 子设备id
   * @type {string}
   * @memberof DeviceDetailResponse
   */
  subDeviceId?: string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof DeviceDetailResponse
   */
  buildingName?: string

  /**
   * 楼层编码
   * @type {string}
   * @memberof DeviceDetailResponse
   */
  floorName?: string

  /**
   * 房间名称
   * @type {string}
   * @memberof DeviceDetailResponse
   */
  roomName?: string

  /**
   * 关联外机
   * @type {string}
   * @memberof DeviceDetailResponse
   */
  relatedOutDevice?: string

  /**
   * 关联内机 ','隔开
   * @type {string}
   * @memberof DeviceDetailResponse
   */
  relatedInDevice?: string

}


/**
* 
* @export
* @interface IPageDeviceDetailResponse
*/
export interface IPageDeviceDetailResponse {
  
  /**
   * 
   * @type {number | string}
   * @memberof IPageDeviceDetailResponse
   */
  size: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageDeviceDetailResponse
   */
  current: number | string

  /**
   * 
   * @type {boolean}
   * @memberof IPageDeviceDetailResponse
   */
  searchCount: boolean

  /**
   * 
   * @type {number | string}
   * @memberof IPageDeviceDetailResponse
   */
  total: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageDeviceDetailResponse
   */
  pages: number | string

  /**
   * 
   * @type {Array<DeviceDetailResponse>}
   * @memberof IPageDeviceDetailResponse
   */
  records: Array<DeviceDetailResponse>

  /**
   * 
   * @type {boolean}
   * @memberof IPageDeviceDetailResponse
   */
  hitCount: boolean

}


/**
* 
* @export
* @interface RespElectricPrice
*/
export interface RespElectricPrice {
  
  /**
   * 
   * @type {number | string}
   * @memberof RespElectricPrice
   */
  id: number | string

  /**
   * 
   * @type {number | string}
   * @memberof RespElectricPrice
   */
  projectId: number | string

  /**
   * 
   * @type {Array<ElectricPriceDuration>}
   * @memberof RespElectricPrice
   */
  priceList: Array<ElectricPriceDuration>

}


/**
* 
* @export
* @interface IPageRespRoomAirSwitchElectric
*/
export interface IPageRespRoomAirSwitchElectric {
  
  /**
   * 
   * @type {number | string}
   * @memberof IPageRespRoomAirSwitchElectric
   */
  size: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespRoomAirSwitchElectric
   */
  current: number | string

  /**
   * 
   * @type {boolean}
   * @memberof IPageRespRoomAirSwitchElectric
   */
  searchCount: boolean

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespRoomAirSwitchElectric
   */
  total: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespRoomAirSwitchElectric
   */
  pages: number | string

  /**
   * 
   * @type {Array<RespRoomAirSwitchElectric>}
   * @memberof IPageRespRoomAirSwitchElectric
   */
  records: Array<RespRoomAirSwitchElectric>

  /**
   * 
   * @type {boolean}
   * @memberof IPageRespRoomAirSwitchElectric
   */
  hitCount: boolean

}


/**
* 
* @export
* @interface RespRoomAirSwitchElectric
*/
export interface RespRoomAirSwitchElectric {
  
  /**
   * 主设备id
   * @type {string}
   * @memberof RespRoomAirSwitchElectric
   */
  iotId?: string

  /**
   * 子设备id
   * @type {string}
   * @memberof RespRoomAirSwitchElectric
   */
  subIotId?: string

  /**
   * 设备类型
   * @type {string}
   * @memberof RespRoomAirSwitchElectric
   */
  type?: string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof RespRoomAirSwitchElectric
   */
  buildingName?: string

  /**
   * 楼层编号
   * @type {string}
   * @memberof RespRoomAirSwitchElectric
   */
  floorCode?: string

  /**
   * 房间名称
   * @type {string}
   * @memberof RespRoomAirSwitchElectric
   */
  roomName?: string

  /**
   * 外机
   * @type {string}
   * @memberof RespRoomAirSwitchElectric
   */
  outMachine?: string

  /**
   * 用电量
   * @type {number | string}
   * @memberof RespRoomAirSwitchElectric
   */
  quantity?: number | string

  /**
   * 电费
   * @type {number | string}
   * @memberof RespRoomAirSwitchElectric
   */
  amount?: number | string

}


/**
* 
* @export
* @interface IPageRespRoomAirConditionElectric
*/
export interface IPageRespRoomAirConditionElectric {
  
  /**
   * 
   * @type {number | string}
   * @memberof IPageRespRoomAirConditionElectric
   */
  size: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespRoomAirConditionElectric
   */
  current: number | string

  /**
   * 
   * @type {boolean}
   * @memberof IPageRespRoomAirConditionElectric
   */
  searchCount: boolean

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespRoomAirConditionElectric
   */
  total: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageRespRoomAirConditionElectric
   */
  pages: number | string

  /**
   * 
   * @type {Array<RespRoomAirConditionElectric>}
   * @memberof IPageRespRoomAirConditionElectric
   */
  records: Array<RespRoomAirConditionElectric>

  /**
   * 
   * @type {boolean}
   * @memberof IPageRespRoomAirConditionElectric
   */
  hitCount: boolean

}


/**
* 
* @export
* @interface RespRoomAirConditionElectric
*/
export interface RespRoomAirConditionElectric {
  
  /**
   * 主设备id
   * @type {string}
   * @memberof RespRoomAirConditionElectric
   */
  iotId?: string

  /**
   * 子设备id
   * @type {string}
   * @memberof RespRoomAirConditionElectric
   */
  subIotId?: string

  /**
   * 子设备端点
   * @type {number | string}
   * @memberof RespRoomAirConditionElectric
   */
  endPoint?: number | string

  /**
   * 设备类型
   * @type {string}
   * @memberof RespRoomAirConditionElectric
   */
  type?: string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof RespRoomAirConditionElectric
   */
  buildingName?: string

  /**
   * 楼层编号
   * @type {string}
   * @memberof RespRoomAirConditionElectric
   */
  floorCode?: string

  /**
   * 房间名称
   * @type {string}
   * @memberof RespRoomAirConditionElectric
   */
  roomName?: string

  /**
   * 运行时长
   * @type {number | string}
   * @memberof RespRoomAirConditionElectric
   */
  elapseTime?: number | string

  /**
   * 高速运行时长
   * @type {number | string}
   * @memberof RespRoomAirConditionElectric
   */
  elapseHighTime?: number | string

  /**
   * 中速运行时长
   * @type {number | string}
   * @memberof RespRoomAirConditionElectric
   */
  elapseMiddleTime?: number | string

  /**
   * 低速运行时长
   * @type {number | string}
   * @memberof RespRoomAirConditionElectric
   */
  elapseLowTime?: number | string

  /**
   * 自动运行时长
   * @type {number | string}
   * @memberof RespRoomAirConditionElectric
   */
  elapseAutoTime?: number | string

  /**
   * 用电量
   * @type {number | string}
   * @memberof RespRoomAirConditionElectric
   */
  quantity?: number | string

  /**
   * 电费
   * @type {number | string}
   * @memberof RespRoomAirConditionElectric
   */
  amount?: number | string

}


/**
* 房间详情
* @export
* @interface RoomDetailResponse
*/
export interface RoomDetailResponse {
  
  /**
   * 房间id
   * @type {number | string}
   * @memberof RoomDetailResponse
   */
  id: number | string

  /**
   * 所属楼层id
   * @type {number | string}
   * @memberof RoomDetailResponse
   */
  floorId: number | string

  /**
   * 房间名称
   * @type {string}
   * @memberof RoomDetailResponse
   */
  roomName: string

  /**
   * 设备数量
   * @type {number | string}
   * @memberof RoomDetailResponse
   */
  deviceCount: number | string

}


/**
* 项目详情
* @export
* @interface ProjectResponse
*/
export interface ProjectResponse {
  
  /**
   * 主键
   * @type {number | string}
   * @memberof ProjectResponse
   */
  id: number | string

  /**
   * 项目全称
   * @type {string}
   * @memberof ProjectResponse
   */
  projectName: string

  /**
   * 项目简称
   * @type {string}
   * @memberof ProjectResponse
   */
  projectSimpleName: string

  /**
   * 管理员姓名
   * @type {string}
   * @memberof ProjectResponse
   */
  adminName: string

  /**
   * 管理员手机号
   * @type {string}
   * @memberof ProjectResponse
   */
  username: string

  /**
   * 省编码
   * @type {string}
   * @memberof ProjectResponse
   */
  provinceId: string

  /**
   * 省名称
   * @type {string}
   * @memberof ProjectResponse
   */
  provinceName: string

  /**
   * 市id
   * @type {string}
   * @memberof ProjectResponse
   */
  cityId: string

  /**
   * 市名称
   * @type {string}
   * @memberof ProjectResponse
   */
  cityName: string

  /**
   * 区id
   * @type {string}
   * @memberof ProjectResponse
   */
  countryId: string

  /**
   * 区名称
   * @type {string}
   * @memberof ProjectResponse
   */
  countryName: string

  /**
   * 详细地址
   * @type {string}
   * @memberof ProjectResponse
   */
  address: string

  /**
   * 企业名称
   * @type {string}
   * @memberof ProjectResponse
   */
  companyName: string

  /**
   * 项目类型 1氟机空调集控系统，2水机空调集控系统，3计费系统
   * @type {Array<string>}
   * @memberof ProjectResponse
   */
  projectType: Array<string>

  /**
   * 项目包含设备列表
   * @type {Array<DeviceType>}
   * @memberof ProjectResponse
   */
  deviceTypes: Array<DeviceType>

}


/**
* 
* @export
* @interface IPageProjectPageResponse
*/
export interface IPageProjectPageResponse {
  
  /**
   * 
   * @type {number | string}
   * @memberof IPageProjectPageResponse
   */
  size: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageProjectPageResponse
   */
  current: number | string

  /**
   * 
   * @type {boolean}
   * @memberof IPageProjectPageResponse
   */
  searchCount: boolean

  /**
   * 
   * @type {number | string}
   * @memberof IPageProjectPageResponse
   */
  total: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageProjectPageResponse
   */
  pages: number | string

  /**
   * 
   * @type {Array<ProjectPageResponse>}
   * @memberof IPageProjectPageResponse
   */
  records: Array<ProjectPageResponse>

  /**
   * 
   * @type {boolean}
   * @memberof IPageProjectPageResponse
   */
  hitCount: boolean

}


/**
* 项目列表查询返回数据
* @export
* @interface ProjectPageResponse
*/
export interface ProjectPageResponse {
  
  /**
   * 主键id
   * @type {number | string}
   * @memberof ProjectPageResponse
   */
  id?: number | string

  /**
   * 项目全称
   * @type {string}
   * @memberof ProjectPageResponse
   */
  projectName?: string

  /**
   * 项目简称
   * @type {string}
   * @memberof ProjectPageResponse
   */
  projectSimpleName?: string

  /**
   * 企业名称
   * @type {string}
   * @memberof ProjectPageResponse
   */
  companyName?: string

  /**
   * 项目地址
   * @type {string}
   * @memberof ProjectPageResponse
   */
  address?: string

  /**
   * 管理员姓名
   * @type {string}
   * @memberof ProjectPageResponse
   */
  adminName?: string

  /**
   * 管理员账号id
   * @type {string}
   * @memberof ProjectPageResponse
   */
  userId?: string

  /**
   * 管理员手机号
   * @type {string}
   * @memberof ProjectPageResponse
   */
  username?: string

  /**
   * 创建时间
   * @type {string}
   * @memberof ProjectPageResponse
   */
  createTime?: string

}


/**
* 楼栋详情（编辑楼栋）
* @export
* @interface BuildingResponse
*/
export interface BuildingResponse {
  
  /**
   * 
   * @type {number | string}
   * @memberof BuildingResponse
   */
  id: number | string

  /**
   * 所属项目id
   * @type {number | string}
   * @memberof BuildingResponse
   */
  projectId: number | string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof BuildingResponse
   */
  buildingName: string

  /**
   * 最低层
   * @type {number | string}
   * @memberof BuildingResponse
   */
  lowestFloor: number | string

  /**
   * 最高层
   * @type {number | string}
   * @memberof BuildingResponse
   */
  maxFloor: number | string

}


/**
* 楼栋列表查询响应数据
* @export
* @interface BuildingPageResponse
*/
export interface BuildingPageResponse {
  
  /**
   * 楼栋id
   * @type {number | string}
   * @memberof BuildingPageResponse
   */
  id?: number | string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof BuildingPageResponse
   */
  buildingName?: string

  /**
   * 最低层
   * @type {number | string}
   * @memberof BuildingPageResponse
   */
  lowestFloor?: number | string

  /**
   * 最高层
   * @type {number | string}
   * @memberof BuildingPageResponse
   */
  maxFloor?: number | string

  /**
   * 房间数量
   * @type {number | string}
   * @memberof BuildingPageResponse
   */
  roomCount?: number | string

  /**
   * 设备数量
   * @type {number | string}
   * @memberof BuildingPageResponse
   */
  deviceCount?: number | string

}


/**
* 
* @export
* @interface IPageBuildingPageResponse
*/
export interface IPageBuildingPageResponse {
  
  /**
   * 
   * @type {number | string}
   * @memberof IPageBuildingPageResponse
   */
  size: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageBuildingPageResponse
   */
  current: number | string

  /**
   * 
   * @type {boolean}
   * @memberof IPageBuildingPageResponse
   */
  searchCount: boolean

  /**
   * 
   * @type {number | string}
   * @memberof IPageBuildingPageResponse
   */
  total: number | string

  /**
   * 
   * @type {number | string}
   * @memberof IPageBuildingPageResponse
   */
  pages: number | string

  /**
   * 
   * @type {Array<BuildingPageResponse>}
   * @memberof IPageBuildingPageResponse
   */
  records: Array<BuildingPageResponse>

  /**
   * 
   * @type {boolean}
   * @memberof IPageBuildingPageResponse
   */
  hitCount: boolean

}


/**
* 楼栋详情页
* @export
* @interface BuildingDetailResponse
*/
export interface BuildingDetailResponse {
  
  /**
   * 
   * @type {number | string}
   * @memberof BuildingDetailResponse
   */
  id: number | string

  /**
   * 所属项目id
   * @type {number | string}
   * @memberof BuildingDetailResponse
   */
  projectId: number | string

  /**
   * 楼栋名称
   * @type {string}
   * @memberof BuildingDetailResponse
   */
  buildingName: string

  /**
   * 最低层
   * @type {number | string}
   * @memberof BuildingDetailResponse
   */
  lowestFloor: number | string

  /**
   * 最高层
   * @type {number | string}
   * @memberof BuildingDetailResponse
   */
  maxFloor: number | string

  /**
   * 设备数量
   * @type {number | string}
   * @memberof BuildingDetailResponse
   */
  deviceCount: number | string

  /**
   * 楼层列表
   * @type {Array<FloorSimpleResponse>}
   * @memberof BuildingDetailResponse
   */
  floors: Array<FloorSimpleResponse>

  /**
   * 最底层各个房间详情
   * @type {Array<RoomDetailResponse>}
   * @memberof BuildingDetailResponse
   */
  lowestFloorRooms: Array<RoomDetailResponse>

}


/**
* 楼层简要信息
* @export
* @interface FloorSimpleResponse
*/
export interface FloorSimpleResponse {
  
  /**
   * 楼层id
   * @type {number | string}
   * @memberof FloorSimpleResponse
   */
  id?: number | string

  /**
   * 楼层号
   * @type {number | string}
   * @memberof FloorSimpleResponse
   */
  floorCode?: number | string

}


/**
* 楼栋层级列表
* @export
* @interface BuildingInnerDeviceResponse
*/
export interface BuildingInnerDeviceResponse {
  
  /**
   * 楼栋名称
   * @type {string}
   * @memberof BuildingInnerDeviceResponse
   */
  buildingName?: string

  /**
   * 楼层列表
   * @type {Array<FloorInnerDeviceResponse>}
   * @memberof BuildingInnerDeviceResponse
   */
  floors?: Array<FloorInnerDeviceResponse>

}


/**
* 楼层列表
* @export
* @interface FloorInnerDeviceResponse
*/
export interface FloorInnerDeviceResponse {
  
  /**
   * 楼层
   * @type {string}
   * @memberof FloorInnerDeviceResponse
   */
  floorCode?: string

  /**
   * 房间列表
   * @type {Array<RoomInnerDeviceResponse>}
   * @memberof FloorInnerDeviceResponse
   */
  rooms?: Array<RoomInnerDeviceResponse>

}


/**
* 未分区设备
* @export
* @interface InnerDeviceResponse
*/
export interface InnerDeviceResponse {
  
  /**
   * 
   * @type {string}
   * @memberof InnerDeviceResponse
   */
  subDeviceId?: string

  /**
   * 关联网关id
   * @type {string}
   * @memberof InnerDeviceResponse
   */
  relatedIotId?: string

  /**
   * 关联子设备id
   * @type {string}
   * @memberof InnerDeviceResponse
   */
  relatedSubIotId?: string

}


/**
* 
* @export
* @interface RoomInnerDeviceListResponse
*/
export interface RoomInnerDeviceListResponse {
  
  /**
   * 楼栋层级列表
   * @type {Array<BuildingInnerDeviceResponse>}
   * @memberof RoomInnerDeviceListResponse
   */
  builds: Array<BuildingInnerDeviceResponse>

  /**
   * 未分区设备
   * @type {Array<InnerDeviceResponse>}
   * @memberof RoomInnerDeviceListResponse
   */
  noAreaDevices: Array<InnerDeviceResponse>

}


/**
* 房间列表
* @export
* @interface RoomInnerDeviceResponse
*/
export interface RoomInnerDeviceResponse {
  
  /**
   * 房间名称
   * @type {string}
   * @memberof RoomInnerDeviceResponse
   */
  roomId?: string

  /**
   * 房间名称
   * @type {string}
   * @memberof RoomInnerDeviceResponse
   */
  roomName?: string

  /**
   * 房间设备列表
   * @type {Array<InnerDeviceResponse>}
   * @memberof RoomInnerDeviceResponse
   */
  roomInnerDevice?: Array<InnerDeviceResponse>

}


/**
* 
* @export
* @interface ReqDelBO
*/
export interface ReqDelBO {
  
  /**
   * id
   * @type {number | string}
   * @memberof ReqDelBO
   */
  id: number | string

  /**
   * 操作人userId,前端不用传
   * @type {number | string}
   * @memberof ReqDelBO
   */
  operateUserId?: number | string

}
