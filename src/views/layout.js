import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReList from './ReList'

import { Button, WhiteSpace, WingBlank } from 'antd-mobile';


function mapStateToProps (state) {
    return {

    };
}

class layout extends Component {
    // 这里要对
    render () {
        console.log(this.props)
        return (
            <div>
                <Button>default</Button><WhiteSpace />
                <Button disabled>default disabled</Button><WhiteSpace />
                <ReList />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(layout);