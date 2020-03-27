import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// 导入组件
import { Toast,Button, ImagePicker, InputItem, List } from 'antd-mobile';

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
            isLoading:true
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
                
                  </div>

              </div>

            </div>
        )
    }

}