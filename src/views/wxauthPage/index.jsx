import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// 导入组件
import { Button } from 'antd-mobile';
// 导入样式
import './index.scss'

import * as actions from '../../redux/authRedux'

@connect(
    state=>state.wxauth,
    dispatch=>bindActionCreators(actions,dispatch)
)

export default class WxauthPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                { title: 'First Tab' },
                { title: 'Second Tab' },
                { title: 'Third Tab' },
            ],
            List: [],
           
        };
    }

    componentDidMount () {
        console.log(this.props)
    }

    // 箭头函数定义一次
    onAuthwx = () => {
        console.log(1)
    }

    render () {

        return (
            <div className='wxauth-page'>
               <Button onClick={this.onAuthwx}>default</Button>
            </div>
        );
    }
}