import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { SearchBar, ListView } from 'antd-mobile'

import './index.scss'

import * as actions from '../../redux/homeRedux'

@connect(
    state => state.home,
    dispatch => bindActionCreators(actions, dispatch)
)

class SearchPage extends Component {

    constructor(props) {
        super(props)

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })

        this.state = {
            value: '',
            dataSource,
            initListData: [],
            pageNumber: 1,
            pageSize: 5,
            totle: 0,
            isLoading: false, // 是否显示加载状态
            hasMore: true
        }
    }

    componentDidMount () {

    }

    async getCustomerList () {
        const { value, pageNumber, pageSize, dataSource } = this.state
        await this.props.findCustomerList({
            merchantCode: '668e98c9419330e4de5421e263b3bd4f',
            companyName: value,
            pageNumber: pageNumber,
            pageSize: pageSize
        })
        const { customerData: { records, total } } = this.props
        this.setState({
            pageNumber: pageNumber + 1,
            total: total,
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
            const { customerData: { records, total } } = this.props
            this.setState({
                total: total,
                initListData: this.state.initListData.concat(records)
            })
        } else {
            this.setState({
                hasMore: false
            })
        }
    }

    onValueChange = (value) => {
        this.setState({
            value: value
        }, () => {
            this.getCustomerList()
        })
    }

    onCancel = () => {
        const { initialPage } = this.props.location.query
        this.props.history.push({ pathname: '/', query: { 'initialPage': initialPage } })
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

    render () {
        const { isLoading, hasMore, pageSize, dataSource, initListData, total } = this.state
        const { children } = this.props
        return (
            <div className="search-page">
                <div className="search-page_search">
                    <div className="search-page_search--input">
                        <SearchBar
                            value={this.state.value}
                            // onSubmit={value => console.log(value, 'onSubmit')}
                            // onClear={value => console.log(value, 'onClear')}
                            // onFocus={() => console.log('onFocus')}
                            // onBlur={() => console.log('onBlur')}
                            onCancel={this.onCancel}
                            onChange={this.onValueChange}
                            placeholder="可输入客户姓名/公司/项目/手机号"
                            showCancelButton
                        />
                    </div>
                </div>
                <div className="search-page_result">
                    <div className="search-page_result--list">
                        <ListView
                            className="search-page_list"
                            dataSource={dataSource.cloneWithRows(initListData)}
                            pageSize={pageSize}
                            renderRow={this.customerRow}
                            onEndReached={this.onEndReached}
                            onEndReachedThreshold={10}
                            scrollEventThrottle={1000}
                            renderHeader={() => (
                                initListData.length > 0 &&
                                <div className="list-cont_item--header">
                                    搜索到<span>{total}</span>个相关客户
                                </div>
                            )}
                            renderBodyComponent={() => (
                                <div className="list-cont">
                                    {children}
                                </div>
                            )}
                            renderFooter={() => (
                                <div className="list-cont_item--underside">
                                    {isLoading ? hasMore ? '加载中...' : '到底了~' : ''}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage
