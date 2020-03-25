import React, { Component } from 'react';
// 导入组件
import { PullToRefresh, ListView, Toast, Tabs } from 'antd-mobile';
// 导入样式

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            tabs: [
                { title: 'First Tab' },
                { title: 'Second Tab' },
                { title: 'Third Tab' },
            ],
            List: [],
            pageNo: 0,
            pageSize: 10, // 分页size
            totalPage: 0, // 总页数初始化
            isShowContent: false, // 控制页面再数据请求后显示
            refreshing: false, // 是否显示刷新状态
            dataSource,
            isLoading: false, // 是否显示加载状态
            height: document.documentElement.clientHeight,
        };
    }

    componentDidMount () {
        this.requestCouponsList();
    }


    // 获取优惠券数据
    requestCouponsList () {
        console.log(this.state);
        // this.props.dispatch({
        //     type: 'coupon/ListOfUser',
        //     payload: {
        //         page: this.state.pageNo,
        //         size: this.state.pageSize,
        //     },
        //     callback: data => {
        //         let result = data.result;
        //         let List = [...this.state.List, ...this.setData(result.couponUserInfoVOS)];
        //         this.setState({
        //             isShowContent: true,
        //             pageNo: this.state.pageNo + 1,
        //             List: List,
        //             dataSource: this.state.dataSource.cloneWithRows(List), // 数据源dataSource
        //             totalPage: Math.ceil(result.usableAmount / this.state.pageSize),
        //             refreshing: false,
        //             isLoading: false,
        //         }, () => {
        //             Toast.hide();
        //         });
        //     },
        // });
        let List = [{ title: '1' }, { title: '2' }, { title: '3' }];
        this.setState({
            isShowContent: true,
            pageNo: this.state.pageNo + 1,
            List: List,
            dataSource: this.state.dataSource.cloneWithRows(List), // 数据源dataSource
            totalPage: 2,
            refreshing: false,
            isLoading: false,
        });
        console.log('requestCouponsList');
    }

    // 下拉刷新
    onRefresh = () => {
        Toast.loading();
        this.setState({
            pageNo: 0,
            totalPage: 0,
            List: [],
        }, () => {
            this.requestCouponsList();
        })
    };

    // 加载更多
    onEndReached = () => {
        if (this.state.isLoading || (this.state.totalPage < this.state.pageNo + 1)) {
            Toast.hide();
            return;
        }
        this.setState({
            isLoading: true,
        }, () => {
            this.requestCouponsList()
        });
    };

    render () {
        // 定义Row，从数据源(dataSurce)中接受一条数据循环到ListView
        const row = (rowData, sectionID, rowID) => {
            console.log('rowData: ', rowData);
            return (
                <div key={rowID}>
                    <div>
                        <div>
                            <div>{rowData.title}</div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <div className='home-page'>
                {
                    <Tabs tabs={this.state.tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={{ height: '100vh' }}>
                            <ListView
                                key={this.state.isActive}
                                ref={el => this.lv = el}
                                dataSource={this.state.dataSource}
                                renderFooter={() => (<div>
                                    {this.state.isLoading ? '正在加载...' : '真的已经到底了'}
                                </div>)}
                                renderRow={row}
                                useBodyScroll={true}
                                distanceToRefresh='20'
                                pullToRefresh={<PullToRefresh
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.onRefresh}
                                />}
                                onEndReached={this.onEndReached}
                                onEndReachedThreshold={30}
                                pageSize={this.state.pageSize}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of second tab
                    </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of third tab
                    </div>
                    </Tabs>

                }
            </div>
        );
    }
}