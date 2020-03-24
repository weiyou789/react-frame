import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ReList from './ReList'

import * as actions from '../store/actions/common'

import { Button, WhiteSpace } from 'antd-mobile';


@connect(
    state=>state.Comreducer, 
    dispatch=>bindActionCreators(actions,dispatch)
)

class Layout extends Component {
    // 这里要对
    render () {
        console.log('this.props',this.props)
        return (
            <div>
                <Button>default</Button><WhiteSpace />
                <Button disabled>default disabled</Button><WhiteSpace />
                <ReList />
            </div>
        );
    }
}

export default Layout