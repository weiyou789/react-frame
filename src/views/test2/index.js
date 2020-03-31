import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as actions from '../../redux/testRedux'

@connect(state => state.test, dispatch => bindActionCreators(actions, dispatch))
class TestChild extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='z'>
                嵌套路由
            </div>
        );
    }
}

export default TestChild
