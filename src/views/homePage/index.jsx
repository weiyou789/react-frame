import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// 导入组件
import { Tabs, ListView } from 'antd-mobile'
// 导入样式
import './index.scss'

import * as actions from '../../redux/homeRedux'

import searchIcon from '@/assets/imgs/navbar_icon_search@2x.png'
@connect(
    state => state.home,
    dispatch => bindActionCreators(actions, dispatch)
)

class HomePage extends Component {

    constructor(props) {
        super(props)

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })

        this.state = {
            tabs: [
                { title: '客户（0）', key: 0 },
                { title: '公司（0）', key: 1 },
                { title: '好橙工项目（0）', key: 2 },
            ],
            initialPage: 0,
            dataSource,
            initListData: [],
            pageNumber: 1,
            pageSize: 5,
            isLoading: false, // 是否显示加载状态
            hasMore: true
        }
    }

    componentDidMount () {
        // this.getCustomerList()
        const { query } = this.props.location
        if (query) {
            this.setState({
                initialPage: query.initialPage
            })
        } else {
            this.setState({
                initialPage: 0
            })
        }
        console.log(this.props)
        this.onChange({ key: 2 })
        // this.getCustomerList()
        // this.getProjectpage()
    }

    async getCustomerList () {
        const { pageNumber, pageSize, dataSource } = this.state
        await this.props.findCustomerList({
            merchantCode: '668e98c9419330e4de5421e263b3bd4f',
            pageNumber: pageNumber,
            pageSize: pageSize
        })
        const { customerData: { records } } = this.props
        this.setState({
            pageNumber: pageNumber + 1,
            dataSource: dataSource.cloneWithRows(records), // 数据源dataSource
            initListData: records,
            isLoading: false
        })
    }

    async getProjectList () {
        const { pageNumber, pageSize, dataSource } = this.state
        await this.props.findProjectList({
            pageNumber: pageNumber,
            pageSize: pageSize,
        })
        const { projectData: { records } } = this.props
        console.log(records)
        this.setState({
            pageNumber: pageNumber + 1,
            dataSource: dataSource.cloneWithRows(records), // 数据源dataSource
            initListData: records,
            isLoading: false
        })
    }
    // 加载更多
    onEndReached = async () => {
        const { pageNumber, pageSize, initListData } = this.state
        if (initListData.length < this.props.customerData.total) {
            await this.props.findCustomerList({
                merchantCode: '668e98c9419330e4de5421e263b3bd4f',
                pageNumber: pageNumber,
                pageSize: pageSize
            })
            const { customerData: { records } } = this.props
            this.setState({
                initListData: this.state.initListData.concat(records)
            })
        } else {
            this.setState({
                hasMore: false
            })
        }
    }

    onChange = (value) => {
        this.setState({
            initialPage: value.key,
            initListData: [],
            pageNumber: 1,
            isLoading: false, // 是否显示加载状态
            hasMore: true
        })
        if (value.key == 0) {
            this.getCustomerList()
        } else if (value.key == 1) {

        } else if (value.key == 2) {
            this.getProjectList()
        }
    }

    onToSearchPage = () => {
        const { initialPage } = this.state
        this.props.history.push({ pathname: '/searchPage', query: { 'initialPage': initialPage } })
    }

    customerRow = (rowData) => {
        return (
            <div className="list-cont_item item-row" key={rowData}>
                <div className="item-col list-cont_item--name">{rowData.companyName}</div>
                <div className="item-col list-cont_item--phone">
                    <span className="item-col_label">电话</span>
                    <span className="item-col_text">{rowData.memberAccount}</span>
                </div>
                <div className="item-col list-cont_item--company">
                    <span className="item-col_label">管理公司</span>
                    <span className="item-col_text">{rowData.provinceName + rowData.cityName + rowData.countryName}</span>
                </div>
                <div className="item-col list-cont_item--date">
                    <span className="item-col_label">注册时间</span>
                    <span className="item-col_text">{rowData.id}</span>
                </div>
            </div>
        )
    }

    projectRow = (rowData) => {
        return (
            <div className="list-cont_item item-row" key={rowData}>
                <div className="item-col list-cont_item--name">
                    <span className="item-col_name">{rowData.projectName}{rowData.projectName}{rowData.projectName}{rowData.projectName}</span>
                    <span className={`item-col_status item-col_status--${this.showStatus(rowData.status).suffix}`}>{this.showStatus(rowData.status).text}</span>
                </div>
                <div className="item-col list-cont_item--company">
                    <span className="item-col_label">经销商</span>
                    <span className="item-col_text">{rowData.companyName}</span>
                </div>
                <div className="item-col list-cont_item--date">
                    <span className="item-col_label">提交时间</span>
                    <span className="item-col_text">{rowData.createTime}</span>
                </div>
            </div>
        )
    }

    showStatus (status) {
        console.log(status)
        if (status == 1) return { suffix: 'default', text: '待提交' }
        if (status == 2) return { suffix: 'default', text: '审核中' }
        if (status == 3) return { suffix: 'default', text: '资料收集中' }
        if (status == 4) return { suffix: 'default', text: '待尽调' }
        if (status == 5) return { suffix: 'close', text: '合作关闭' }
        if (status == 6) return { suffix: 'default', text: '待签约' }
        if (status == 7) return { suffix: 'default', text: '待放款' }
        if (status == 8) return { suffix: 'default', text: '贷中' }
        if (status == 9) return { suffix: 'success', text: '合作完成' }
    }

    render () {
        const { tabs, initialPage, hasMore, isLoading, pageSize, dataSource, initListData } = this.state
        const { children } = this.props
        return (
            <div className='home-page' >
                <div className="home-page_header">
                    <div className="home-page_header--image"></div>
                    <div className="home-page_header--name">hzbi</div>
                    <div>-</div>
                    <div className="home-page_header--phone">17551094260</div>
                </div>
                <div className="home-page_search">
                    <div className="home-page_search--input" onClick={this.onToSearchPage}>
                        <div className="home-page_search--icon">
                            <img src={searchIcon}></img>
                        </div>
                        <div className="home-page_search--text">可输入客户姓名/公司/项目/手机号</div>
                    </div>
                </div>
                <div className="home-page_tabs">
                    <Tabs tabs={tabs} page={initialPage} onChange={this.onChange}>
                        <div className="home-page_tabs--list">
                            {
                                initListData.length > 0 ?
                                    <ListView
                                        className="home-page_list"
                                        dataSource={dataSource.cloneWithRows(initListData)}
                                        pageSize={pageSize}
                                        renderRow={initialPage == 0 ? this.customerRow : initialPage == 1 ? this.customerRow : this.projectRow}
                                        onEndReached={this.onEndReached}
                                        onEndReachedThreshold={10}
                                        scrollEventThrottle={1000}
                                        renderBodyComponent={() => (
                                            <div className="list-cont">
                                                {children}
                                            </div>
                                        )}
                                        renderFooter={() => (
                                            <div className="list-cont_item--underside">
                                                {isLoading ? '加载中...' : hasMore ? '加载中...' : '到底了~'}
                                            </div>
                                        )}
                                    /> :
                                    <div className="home-page_empty">
                                        您还没有客户哦～
                                    </div>
                            }
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}



export default HomePage
