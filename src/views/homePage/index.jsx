import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// 导入组件
import { PullToRefresh, ListView, Toast, Tabs, SearchBar } from 'antd-mobile'
// 导入样式
import './index.scss'

import * as actions from '../../redux/homeRedux'

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
                { title: '客户（0）' },
                { title: '公司（0）' },
                { title: '工程项目（0）' },
            ],
            dataSource, dataSource,
            listData: [],
            _listData: [],
            pageNumber: 1,
            pageSize: 6,
            isLoading: false, // 是否显示加载状态
            hasMore: true
        }
    }

    componentDidMount () {
        this.getCustomerList()
    }


    // 获取优惠券数据
    async getCustomerList () {
        const { pageNumber, pageSize, dataSource } = this.state
        await this.props.findCustomerList({
            merchantCode: '668e98c9419330e4de5421e263b3bd4f',
            pageNumber: pageNumber,
            pageSize: pageSize
        })
        const { customerData: { records } } = this.props
        // if (records.length < pageSize) {
        //     this.setState({
        //         hasMore: false
        //     })
        // }
        this.setState({
            pageNumber: pageNumber + 1,
            dataSource: dataSource.cloneWithRows(records), // 数据源dataSource
            _listData: records,
            isLoading: false
        })
    }

    // 加载更多
    onEndReached = async () => {

        // if (isLoading && !hasMore) {
        //     return false
        // }
        const { pageNumber, pageSize, listData } = this.state
        console.log(listData.length)
        console.log(this, this.props.customerData.total)
        if (listData.length < this.props.customerData.total) {
            await this.props.findCustomerList({
                merchantCode: '668e98c9419330e4de5421e263b3bd4f',
                pageNumber: pageNumber,
                pageSize: pageSize
            })
            const { customerData: { records } } = this.props
            this.setState({
                data: this.state.listData.concat(records)
            })
        }
        // const page = pageNumber + 1

        // const { customerData: { records } } = this.props
        // const data = listData.concat(records)
        // this.setState({
        //     dataSource: dataSource.cloneWithRows(data)
        // })
    }

    customerRow = (rowData) => {
        return (
            <div className="list-cont_item" key={rowData}>
                <div className="list-cont_item--name">{rowData.companyName}</div>
                <div className="list-cont_item--phone">{rowData.memberAccount}</div>
                <div className="list-cont_item--company"><span>管理的公司：</span>{rowData.provinceName + rowData.cityName + rowData.countryName}</div>
                <div className="list-cont_item--date"><span>注册时间：</span>{rowData.id}</div>
            </div>
        )
    }

    render () {
        const { tabs, hasMore, pageSize, dataSource } = this.state
        const { children, customerData: { records = [] } } = this.props
        this.state.listData = this.state.listData.concat(this.state._listData)
        // 定义Row，从数据源(dataSurce)中接受一条数据循环到ListView
        return (
            <div className='home-page' >
                <div className="home-page_header">
                    <div className="home-page_header--image"></div>
                    <div className="home-page_header--name">hzbi</div>
                    <div className="home-page_header--phone">17551094260</div>
                </div>
                <div className="home-page_search">
                    <div className="home-page_search--input"></div>
                </div>
                <div className="home-page_tabs-fixed"></div>
                <div className="home-page_tabs">
                    <Tabs tabs={tabs} initialPage={0}>
                        <div className="home-page_tabs--list">
                            <ListView
                                className="home-page_list"
                                dataSource={dataSource.cloneWithRows(this.state.listData)}
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
                                        {hasMore ? '加载中...' : '~到底了~'}
                                    </div>
                                )}
                            />
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
