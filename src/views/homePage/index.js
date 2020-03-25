import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as actions from '../../redux/testRedux'

import { Button } from 'antd-mobile';

@connect(state => state.test, dispatch => bindActionCreators(actions, dispatch))
class Test extends Component {



    // 这里要对
    render () {
        return (
            <div className='z'>
                index
            </div>
        );
    }
}

export default Test