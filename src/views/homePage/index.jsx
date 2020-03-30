import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// 导入组件
import { Tabs, ListView } from 'antd-mobile'
// 导入样式
import './index.scss'

import * as actions from '../../redux/homeRedux'

import searchIcon from '@/assets/imgs/navbar_icon_mune@2x.png'
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
        this.getCustomerList()
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
        // this.getCustomerList()
        this.getProjectpage()
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

    async getProjectpage () {
        const { pageNumber, pageSize, dataSource } = this.state
        await this.props.findProjectList({
            pageNumber: pageNumber,
            pageSize: pageSize,
        })
        const { projectData: { records } } = this.props
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
            initialPage: value.key
        })
    }

    onToSearchPage = () => {
        const { initialPage } = this.state
        this.props.history.push({ pathname: '/searchPage', query: { 'initialPage': initialPage } })
    }

    customerRow = (rowData) => {
        return (
            <div className="list-cont_item item-row" key={rowData}>
                <div className="item-col list-cont_item--name">{rowData.projectName}</div>
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

    render () {
        const { tabs, initialPage, hasMore, pageSize, dataSource, initListData } = this.state
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
                                        renderRow={this.customerRow}
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
                                                {hasMore ? '加载中...' : '到底了~'}
                                            </div>
                                        )}
                                    /> :
                                    <div className="home-page_empty">
                                        您还没有客户哦～
                                    </div>
                            }
                        </div>
                        {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}> Content of second tab </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}> Content of third tab </div> */}
                    </Tabs>
                </div>
            </div>
        )
    }
}



export default HomePage
