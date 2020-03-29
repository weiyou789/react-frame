import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// 导入组件
import { Button, Picker, InputItem, List } from 'antd-mobile';

// 导入样式
import './index.scss'

import * as actions from '../../redux/commonRedux'


const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
            <div>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 14 }}>{props.extra}</div>
        </div>
    </div>
);

@connect(
    state => state.common,
    dispatch => bindActionCreators(actions, dispatch)
)

export default class Addbusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerValue: ["110000000000", "110100000000", "110101000000"],
            value: ''
        };
    }
    async   componentDidMount () {
        await this.props.getNestdata()
        console.log(1, this.props)
    }

    onAddInfo = () => {
        console.log(this.state)
    }
    onHandleChange = (val) => {
        this.setState({ value: val });
    }

    render () {
        let antdDistrict = [];
        let districtData = this.props.nestData;
        Object.keys(districtData).forEach((index) => {
            let itemLevel1 = {};
            let itemLevel2 = {};
            itemLevel1.value = districtData[index].provinceId;
            itemLevel1.label = districtData[index].name;
            itemLevel1.children = [];
            let data = districtData[index].cities;
            Object.keys(data).forEach((index) => {
                itemLevel2.value = data[index].cityId;
                itemLevel2.label = data[index].name;
                itemLevel2.children = [];
                let data2 = data[index].countries;
                let itemLevel3 = {};
                itemLevel3.children = [];
                Object.keys(data2).forEach((index) => {
                    itemLevel3.value = data2[index].countryId;
                    itemLevel3.label = data2[index].name;
                    itemLevel2.children.push(itemLevel3);
                    itemLevel3 = {};
                });
                itemLevel1.children.push(itemLevel2);
                itemLevel2 = {};
            });
            antdDistrict.push(itemLevel1)
        });
        return (

            <div className='business-page'>
                <div className='business-page_form'>
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
                    <div className='business-page_form-title'><i>*</i>经营区域</div>
                    <List>
                        <Picker
                            title=""
                            extra="选择地区"
                            data={antdDistrict}
                            value={this.state.pickerValue}
                            onChange={v => this.setState({ pickerValue: v })}
                            onOk={v => this.setState({ pickerValue: v })}
                            onClick={() => { console.log('xx') }}
                        >
                            <CustomChildren></CustomChildren>
                        </Picker>
                    </List>
                </div>

                <Button onClick={this.onAddInfo} className="business-page_btn">确认创建</Button>

            </div>
        )
    }

}