import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// 导入组件
import { Toast, Button, ImagePicker, InputItem, List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
// 导入样式
import './index.scss'

import * as actions from '../../redux/commonRedux'


@connect(
    state => state.common,
    dispatch => bindActionCreators(actions, dispatch)
)

export default class Customer extends Component {
    state = {

    }


    async   componentDidMount () {
        // await this.props.getNestdata()
        // console.log(1, this.props)
    }

    onAuthInfo = () => {
        this.setState({
            isLoading: true
        })
        const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
        console.log(this.state)
        Toast.info('身份证号有误，请重填')
        // if (!idcardReg.test(this.individual.credentialNumber)) {
        //     Toast('身份证号有误，请重填')
        //     return
        // }
    }
    onHandleChange = (val) => {
        this.setState({ value: val });
    }
    render () {

        return (
            <div className='customer-page'>
                <div className='customer-page_head'>
                    <div className='customer-page_head-img'>
                        <img src={require('../../assets/imgs/img_zhucekehu_touxiang@2x.png')} alt="" />
                    </div>
                    <p>李婷-18052099875</p>
                </div>
                <div className='customer-page_info'>
                    <h4>基本信息</h4>
                    <p>
                        <b>注册时间</b> 2020年03月25日 21:23:45
                    </p>
                    <p>
                        <b>账号来源</b> 好享家会员小程序
                    </p>
                </div>

                <div className='customer-page_title'>他/她的公司</div>
                <List className="my-list">
                <Item extra={<div className='customer-page_yes'>已认证</div>}    arrow="horizontal" >
                   舒适云
                </Item>
                <Item extra={<div className='customer-page_no'>未认证</div>}    >
                   舒适云
                </Item>
                <Item >
                    <img src={require('../../assets/imgs/navbar_icon_mune@2x.png')}  className='customer-page_add'/>创建一个企业
                </Item>
                </List>
            </div>
        )
    }

}