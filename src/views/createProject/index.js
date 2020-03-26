import React, { Component } from 'react';
// 导入组件
import { InputItem, Button, TextareaItem, List, Picker, ImagePicker } from 'antd-mobile';
import WxImageViewer from 'react-wx-images-viewer';
// 导入样式
import './index.scss'
import { isNum, formatMoney } from '@/utils/format'

const seasons =
    [
        { label: '项目跟踪阶段', value: '1' },
        { label: '招投标', value: '2' },
        { label: '合同已签订', value: '3' },
        { label: '项目已开工', value: '4' }
    ]
const category =
    [
        { label: '地产项目', value: '1' },
        { label: '政府公建项目', value: '2' },
        { label: '市政工程', value: '3' },
        { label: '办公楼', value: '4' },
        { label: '厂房', value: '5' },
        { label: '其他', value: '6' }
    ]
const borrowingCycle =
    [
        { label: '1个月', value: '1' },
        { label: '2个月', value: '2' },
        { label: '3个月', value: '3' },
        { label: '4个月', value: '4' },
        { label: '5个月', value: '5' },
        { label: '6个月', value: '6' }
    ]


class createProject extends Component {
    state = {
        isOpenImg: false,
        imagsUrl: [],
        imagsIndex: '',
        form: {
            name: '',//工程项目名称
            address: '',//项目地址
            progress: ['2'],//工程项目进度
            category: ['2'],//项目类别
            name2: '',//甲方名称
            totalContract: '',//合同总额
            equipmentBrand: '',//设备品牌
            totalAmountOfEquipment: '',//设备款总额
            estimatedLoanAmount: '',//预估借款金额
            borrowingCycle: [],//预估借款周期
            paymentMethod: '',//工程项目回款方式
            files: [{
                url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
                id: '2121',
            }]
        }
    }

    onChange (val, key, isFormat = false) {
        let res = ''
        if (isFormat) {
            res = isNum(val, 100)//只能输入数字,可限制后几位（小数）
            if (isNaN(res)) res = ''
        }
        this.setState({
            form: {
                ...this.state.form,
                [key]: isFormat ? res : val
            }
        })
    }

    //附件上传或者删除 add or remove
    onChangeFiles = (files, type, index) => {
        console.log('onChangeFiles');
        console.log(files, type, index);

    }
    // onAddImageClick = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         form: {
    //             ...this.state.form,
    //             files: this.state.form.files.concat({
    //                 url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    //                 id: '3',
    //             })
    //         }
    //     });
    // }

    openViewer (index, fs) {
        console.log('index, fs: ', index, fs);
        document.body.style.overflow = 'hidden';
        this.setState({
            isOpenImg: true,
            imagsUrl: [
                'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
            ],
            imagsIndex: index
        })
    }

    onCloseImageViewer (val) {
        document.body.style.overflow = 'auto';
        this.setState({
            isOpenImg: false,
        })
    }

    submit = () => {
        console.log(this.state.form);
    }

    render () {
        return (
            <div className='create-project'>
                <div className='create-project__tite'>经销商：</div>
                <div className='create-project__name'>江苏舒适云信息技术有限公司</div>
                <div className='create-project__form'>
                    <div className='create-project__form__title'><i>*</i>工程项目名称</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入"
                            maxLength={100}
                            value={this.state.form.name}
                            onChange={(val) => { this.onChange(val, 'name') }}
                        ></InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>项目地址</div>
                    <List>
                        <TextareaItem
                            rows={2}
                            count={200}
                            onChange={(val) => { this.onChange(val, 'address') }}
                        />
                    </List>
                    <div className='create-project__form__title'><i>*</i>工程项目进度</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={seasons}
                            value={this.state.form.progress}
                            title="工程项目进度"
                            onOk={val => this.onChange(val, 'progress')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.progress.length > 0 ? '' : '请选择'}</List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>项目类别</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={category}
                            value={this.state.form.category}
                            title="项目类别"
                            onOk={val => this.onChange(val, 'category')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.progress.length > 0 ? '' : '请选择'}</List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>甲方名称</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入"
                            maxLength={100}
                            value={this.state.form.name2}
                            onChange={(val) => { this.onChange(val, 'name2') }}
                        ></InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>合同总额</div>
                    <List>
                        <InputItem
                            clear
                            labelNumber={1}
                            placeholder="请输入"
                            maxLength={100}
                            value={formatMoney(this.state.form.totalContract)}
                            onChange={(val) => { this.onChange(val, 'totalContract', 'format') }}
                        >
                            ¥
                        </InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>设备品牌</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入"
                            maxLength={100}
                            value={this.state.form.equipmentBrand}
                            onChange={(val) => { this.onChange(val, 'equipmentBrand') }}
                        ></InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>设备款总额</div>
                    <List>
                        <InputItem
                            clear
                            labelNumber={1}
                            placeholder="请输入"
                            maxLength={100}
                            value={formatMoney(this.state.form.totalAmountOfEquipment)}
                            onChange={(val) => { this.onChange(val, 'totalAmountOfEquipment', 'format') }}
                        >
                            ¥
                        </InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>预估借款金额</div>
                    <List>
                        <InputItem
                            clear
                            labelNumber={1}
                            placeholder="请输入"
                            maxLength={100}
                            value={formatMoney(this.state.form.estimatedLoanAmount)}
                            onChange={(val) => { this.onChange(val, 'estimatedLoanAmount', 'format') }}
                        >
                            ¥
                        </InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>预估借款周期</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={borrowingCycle}
                            value={this.state.form.borrowingCycle}
                            title="预估借款周期"
                            onOk={val => this.onChange(val, 'borrowingCycle')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.borrowingCycle.length > 0 ? '' : '请选择'}</List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>工程项目回款方式</div>
                    <List>
                        <TextareaItem
                            rows={2}
                            count={200}
                            onChange={(val) => { this.onChange(val, 'paymentMethod') }}
                        />
                    </List>
                    <div className='create-project__form__title'>附件</div>
                    <ImagePicker
                        multiple
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                        files={this.state.form.files}
                        onChange={this.onChangeFiles}
                        onImageClick={(index, fs) => this.openViewer(index, fs)}
                        selectable={this.state.form.files.length < 8}
                    />
                    {
                        this.state.isOpenImg
                            ? <WxImageViewer onClose={this.onCloseImageViewer.bind(this)} urls={this.state.imagsUrl} index={this.state.imagsIndex} />
                            : ""
                    }
                    {/* end form */}
                </div>
                <div className='submit'>
                    <div onClick={this.submit} className='button' style={{ width: '100px', marginRight: '10px' }}>保存</div>
                    <div onClick={this.submit} className='button' style={{ width: '130px', color: '#fff', background: '#108ee9' }}>提交申请</div>
                </div>

            </div >
        )
    }
}
export default createProject