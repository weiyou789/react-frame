import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from "moment"
import './index.scss'

import * as actions from '../../redux/projectRedux'

@connect(
    state => state.project,
    dispatch => bindActionCreators(actions, dispatch)
)

class ApprovePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            approvelist: []
        }
    }

    componentWillMount () {
        console.log(this.props)
        this.getApprovelist()
    }

    async getApprovelist () {
        await this.props.findAduitlist({ projectId: 1 })
        const { approveData } = this.props
        this.setState({
            approvelist: [...approveData]
        })

    }
    timeformat = (val) => {
        return moment(val).format("YYYY-MM-DD HH:mm:ss");
    }

    render () {
        const { approvelist } = this.state
        console.log(approvelist)
        return (
            <div className='approve-page'>
                {
                    approvelist && approvelist.map(item => {
                        return (
                            <div className='approve-page_item' key={item.id}>
                                <p><i>操作人</i> {item.createBy}</p>
                                <p><i>操作时间</i>{item.createTime ? this.timeformat(item.createTime) : '-'}</p>
                                <p><i>操作内容</i> {item.remark}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


export default ApprovePage