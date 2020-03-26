import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// 导入组件
import { Button, Picker, InputItem } from 'antd-mobile';

// 导入样式
import './index.scss'

import * as actions from '../../redux/commonRedux'


const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
);

@connect(
    state => state.common,
    dispatch => bindActionCreators(actions, dispatch)
)

export default class CustomerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerValue: [],
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
    handleChange = (event) =>  {
        this.setState({ value: event.target.value });
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

            <div className='customer'>

                <InputItem
                    placeholder="0.00"
                    value={this.state.value}
                    onChange={this.handleChange}
                ></InputItem>
                <Picker
                    title="选择地区"
                    extra="请选择(可选)"
                    data={antdDistrict}
                    value={this.state.pickerValue}
                    onChange={v => this.setState({ pickerValue: v })}
                    onOk={v => this.setState({ pickerValue: v })}
                    onClick={() => { console.log('xx') }}
                >
                    <CustomChildren>地址</CustomChildren>

                </Picker>
                <Button onClick={this.onAddInfo}>default</Button>

            </div>
        )
    }

}