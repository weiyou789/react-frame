import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// 导入组件
import { Toast,Button, ImagePicker, InputItem, List } from 'antd-mobile';

// 导入样式
import './index.scss'

import * as actions from '../../redux/commonRedux'

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}];
const data1 = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2122',
}];
@connect(
    state => state.common,
    dispatch => bindActionCreators(actions, dispatch)
)

export default class Authbusiness extends Component {
    state = {
        files: data,
        cardfiles: data1,
        multiple: false,
        isLoading:false
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onChangecards = (cardfiles, type, index, TYPE = '') => {
        console.log(cardfiles, type, index, TYPE);
        this.setState({
            cardfiles,
        });
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
        Toast.info('身份证号有误，请重填',1)
        // if (!idcardReg.test(this.individual.credentialNumber)) {
        //     Toast('身份证号有误，请重填')
        //     return
        // }
        try {
            this.setState({
                isLoading:false
            })
        } catch (error) {
            
        }
    }
    onHandleChange = (val) => {
        this.setState({ value: val });
    }
    render () {
        const { files, cardfiles } = this.state;
        return (
            <div className='business-page'>
                <div className='business-page_form'>
                    <div className='business-page_form-top'>
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 1}
                            multiple={false}
                        />
                    </div>
                    <div className='business-page_form-title'><i>*</i>企业全称</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入企业全称"
                            maxLength={50}
                            value={this.state.value}
                            onChange={(val) => { this.onHandleChange(val) }}
                        ></InputItem>
                    </List>


                    <div className='business-page_form-title'><i>*</i>统一社会信用代码</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入统一社会信用代码"
                            maxLength={50}
                            value={this.state.value}
                            onChange={(val) => { this.onHandleChange(val) }}
                        ></InputItem>
                    </List>
                    <div className='business-page_form-info'>
                        <div className='business-page_form-flex'>
                       
                            <ImagePicker
                                files={cardfiles}
                                onChange={this.onChangecards}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={cardfiles.length < 1}
                                multiple={false}
                            />
                        </div>
                        <div className='business-page_form-flex'>
                         
                            <ImagePicker
                                files={cardfiles}
                                onChange={(index, fs, nu) => this.onChangecards(index, fs, nu, 'X')}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={cardfiles.length < 1}
                                multiple={false}
                            />
                        </div>
                    </div>
                    <div className='business-page_form-title'><i>*</i>法人代表</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入法人代表"
                            maxLength={50}
                            value={this.state.value}
                            onChange={(val) => { this.onHandleChange(val) }}
                        ></InputItem>
                    </List>
                    <div className='business-page_form-title'><i>*</i>法人代表身份证号码</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入法人代表身份证号码"
                            maxLength={18}
                            value={this.state.value}
                            onChange={(val) => { this.onHandleChange(val) }}
                        ></InputItem>
                    </List>
                </div>
                <Button onClick={this.onAuthInfo} className="business-page_btn" loading={this.state.isLoading}  disabled={this.state.isLoading}>提交认证</Button>

            </div>
        )
    }

}