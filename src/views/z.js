import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ReList from './ReList'

import * as actions from '../store/actions/common'

import { Button, WhiteSpace } from 'antd-mobile';


class Z extends Component {
    // 这里要对
    render () {
        
        return (
            <div className='z'>
                <Button type="primary">primary</Button>
            </div>
        );
    }
}

export default Z