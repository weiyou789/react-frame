import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../redux/commonRedux/index'


@connect(
    state => state.common,
    dispatch => bindActionCreators(actions, dispatch)
)

class Layout extends Component {
    render () {
        return (
            <div className='layout'>
                {this.props.children}
            </div>
        );
    }
}

export default Layout