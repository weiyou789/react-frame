import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

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
        this.autoFocusInst.focus()
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
            isLoading: total <= pageSize ? false : true
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
                isLoading: true,
                total: total,
                pageNumber: 1,
                initListData: this.state.initListData.concat(records)
            })
        } else {
            this.setState({
                isLoading: false,
                hasMore: false
            })
        }
    }

    onClearValue = (value) => {
        this.setState({}, () => {
            return {
                initListData: []
            }
        })
    }

    onChange = (value) => {
        this.setState({
            value: value
        })
    }

    onSubmit = (value) => {
        this.setState({
            value: value,
            pageNumber: 1
        }, async () => {
            await this.getCustomerList()
        })
    }

    onCancel = () => {
        const { initialPage } = this.props.location.state
        this.props.history.push({ pathname: '/', state: { 'initialPage': initialPage } })
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
                            ref={ref => this.autoFocusInst = ref}
                            value={this.state.value}
                            onClear={this.onClearValue}
                            // onFocus={() => console.log('onFocus')}
                            // onBlur={() => console.log('onBlur')}
                            onChange={this.onChange}
                            onSubmit={this.onSubmit}
                            onCancel={this.onCancel}
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
                                    {isLoading ? '加载中...' : hasMore ? '' : '到底了~'}
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
