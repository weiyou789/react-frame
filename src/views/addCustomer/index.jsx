import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// 导入组件
import { Button, Picker, InputItem, List, Toast } from 'antd-mobile';
// 导入样式
import './index.scss'

import * as actions from '../../redux/commonRedux'

@connect(
    state => state.common,
    dispatch => bindActionCreators(actions, dispatch)
)

class Addcustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                phone: '',
                verificationCode: ''
            },
            count: 30,
            liked: true,
            isLoading: false
        };
    }
    async componentDidMount () {

    }

    onAddInfo = () => {
        console.log(this.state)
        // let phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
        // if (!this.state.formData.name) {
        //     Toast.info('姓名未填写',1)
        //     return false
        // }
        // if (!this.state.formData.phone) {
        //     Toast.info('手机号未填写',1)
        //     return false
        // }
        // if (!phone.test(this.state.formData.phone)) {
        //     Toast.info('请输入正确的手机号码',1)
        //     return false
        // } 
        // if (!this.state.formData.code) {
        //     Toast.info('验证码未填写',1)
        //     return false
        // }
        // this.setState({
        //     isLoading:true
        // })
        try {
            Toast.success('添加成功', 1)
            this.props.history.push({ pathname: '/customer', query: {} })
        } catch (error) {
            this.setState({
                isLoading: false
            })
        }
    }


    onHandleChange = (val, type) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [type]: val
            }
        });
    }

    countDown () {
        const { count } = this.state;
        if (count === 1) {
            this.setState({
                count: 30,
                liked: true,
            });
        } else {
            this.setState({
                count: count - 1,
                liked: false,
            });
            setTimeout(this.countDown.bind(this), 1000);
        }
    }

    onGedcode = () => {
        const { sendMsg } = this.props
        const { liked } = this.state
        if (!liked) {
            return
        }
        this.countDown()
    }

    render () {
        return (
            <div className='customer-page'>
                <div className='customer-page_form'>
                    <div className='customer-page_form-title'>客户信息</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入姓名"
                            maxLength={50}
                            value={this.state.formData.name}
                            onChange={(val) => { this.onHandleChange(val, 'name') }}
                        ></InputItem>
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                            maxLength={11}
                            value={this.state.formData.phone}
                            onChange={(val) => { this.onHandleChange(val, 'phone') }}
                        ></InputItem>
                        <InputItem
                            clear
                            placeholder="请输入短信验证码"
                            maxLength={6}
                            value={this.state.formData.code}
                            onChange={(val) => { this.onHandleChange(val, 'code') }}
                            extra={<div className='customer-page_code' onClick={this.onGedcode}>
                                {this.state.liked
                                    ? '获取验证码'
                                    : `${this.state.count} 秒后重发`
                                }
                            </div>}
                        >
                        </InputItem>
                    </List>

                </div>

                <Button onClick={this.onAddInfo} className="customer-page_btn" loading={this.state.isLoading} disabled={this.state.isLoading}>添加</Button>

            </div>
        )
    }

}

export default Addcustomer 
