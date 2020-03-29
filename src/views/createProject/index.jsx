import React, { Component } from 'react';
// 导入组件
import { InputItem, Modal, TextareaItem, List, Picker, ImagePicker } from 'antd-mobile';
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
const type =
    [
        { label: '地产项目', value: '1' },
        { label: '政府公建项目', value: '2' },
        { label: '市政工程', value: '3' },
        { label: '办公楼', value: '4' },
        { label: '厂房', value: '5' },
        { label: '其他', value: '6' }
    ]
const equipmentCategory =
    [
        { label: '空调', value: '1' },
        { label: '采暖', value: '2' },
        { label: '新风', value: '3' },
        { label: '净水', value: '4' },
        { label: '智能化', value: '5' },
        { label: '辅材', value: '6' },
        { label: '电梯', value: '7' },
        { label: '其他', value: '8' }
    ]
const loanMonth =
    [
        { label: '1个月', value: '1' },
        { label: '2个月', value: '2' },
        { label: '3个月', value: '3' },
        { label: '4个月', value: '4' },
        { label: '5个月', value: '5' },
        { label: '6个月', value: '6' }
    ]
const upstreamSupplierType =
    [
        { label: '厂商', value: '1' },
        { label: '代理商', value: '2' },
        { label: '经销商', value: '3' }
    ]


class createProject extends Component {
    state = {
        isOpenImg: false,
        imagsUrl: [],
        imagsIndex: '',
        form: {
            projectName: '',//工程项目名称
            address: '',//项目地址
            progress: ['2'],//工程项目进度 ,1：项目跟踪阶段 2：招投标 3：合同已签订 4：项目已开工
            type: ['2'],//项目类别
            firstPartName: '',//甲方名称
            contractAmount: '',//合同总额
            equipmentCategory: [],//设备品类 [] integer1：空调 2：采暖 3：新风 4：净水 5：智能化 6：辅材 7：电梯 8：其他
            deviceBrand: '',//设备品牌
            deviceAmount: '',//设备款总额
            predictLoanAmount: '',//预估借款金额
            loanMonth: [],//预估借款周期 ,integer
            loanPayType: '',//工程项目回款方式,integer 1：预付款 2：货到付款 3：安装进度款 4：验收 5：交付 6：审计结算 7：其他
            upstreamSupplierType: [],//上游供应商类型,integer 1：厂商 2：代理商 3：经销商
            upstreamSupplierName: '',//上游供应商名称
            upstreamPromiseMonth: [],//上游接受承兑时间,integer
            files: [{
                url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
                id: '2121',
            }]
        }
    }

    componentDidMount () {
        console.log('componentDidMount', this);
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

    onSave = () => {
        console.log(this.state.form);
    }

    onApply = () => {
        console.log(this.state.form);
        Modal.alert('去认证', '提交项目需要先为经销商认证', [
            {
                text: '暂不认证', onPress: () => {
                    // do nothing
                }
            },
            {
                text: '去认证', onPress: () => {
                    console.log('ok')
                }
            },
        ])
    }

    render () {
        return (
            <div className='create-project'>
                <div className='create-project__layout'>
                    <div className='create-project__tite'>经销商：</div>
                    <div className='create-project__name'>江苏舒适云信息技术有限公司</div>
                </div>
                <div className='create-project__form'>
                    <div className='create-project__form__title'><i>*</i>工程项目名称</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入工程项目名称"
                            maxLength={100}
                            value={this.state.form.projectName}
                            onChange={(val) => { this.onChange(val, 'projectName') }}
                        ></InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>项目地址</div>
                    <List>
                        <TextareaItem
                            rows={2}
                            count={200}
                            placeholder="请输入项目地址"
                            onChange={(val) => { this.onChange(val, 'address') }}
                        />
                    </List>
                    <div className='create-project__form__title'><i>*</i>甲方名称</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入甲方名称"
                            maxLength={50}
                            value={this.state.form.projectfirstPartName}
                            onChange={(val) => { this.onChange(val, 'firstPartName') }}
                        ></InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>项目类别</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={type}
                            value={this.state.form.type}
                            title="项目类别"
                            onOk={val => this.onChange(val, 'type')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.progress.length > 0 ? '' : '请选择项目类别'}</List.Item>
                        </Picker>
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
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.progress.length > 0 ? '' : '请选择工程项目进度'}</List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>合同总额</div>
                    <List>
                        <InputItem
                            clear
                            labelNumber={1}
                            placeholder="请输入合同总额"
                            maxLength={100}
                            value={formatMoney(this.state.form.contractAmount)}
                            onChange={(val) => { this.onChange(val, 'contractAmount', 'format') }}
                        >
                            <font className='create-project__form__unit'>¥</font>
                        </InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>设备款总额</div>
                    <List>
                        <InputItem
                            clear
                            labelNumber={1}
                            placeholder="请输入设备款总额"
                            maxLength={100}
                            value={formatMoney(this.state.form.deviceAmount)}
                            onChange={(val) => { this.onChange(val, 'deviceAmount', 'format') }}
                        >
                            <font className='create-project__form__unit'>¥</font>
                        </InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>设备品类</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={equipmentCategory}
                            value={this.state.form.equipmentCategory}
                            title="设备品类"
                            onOk={val => this.onChange(val, 'equipmentCategory')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.equipmentCategory.length > 0 ? '' : '请选择设备品类'}</List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>设备品牌</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入设备品牌"
                            maxLength={100}
                            value={this.state.form.deviceBrand}
                            onChange={(val) => { this.onChange(val, 'deviceBrand') }}
                        ></InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>上游供应商类型</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={upstreamSupplierType}
                            value={this.state.form.upstreamSupplierType}
                            title="上游供应商类型"
                            onOk={val => this.onChange(val, 'upstreamSupplierType')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.upstreamSupplierType.length > 0 ? '' : '请选择上游供应商类型'}</List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>上游供应商名称</div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入上游供应商名称"
                            maxLength={50}
                            value={this.state.form.upstreamSupplierName}
                            onChange={(val) => { this.onChange(val, 'upstreamSupplierName') }}
                        ></InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>上游接受承兑时间</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={loanMonth}
                            value={this.state.form.upstreamPromiseMonth}
                            title="上游接受承兑时间"
                            onOk={val => this.onChange(val, 'upstreamPromiseMonth')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.upstreamPromiseMonth.length > 0 ? '' : '请选择上游接受承兑时间'}</List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>预估借款金额</div>
                    <List>
                        <InputItem
                            clear
                            labelNumber={1}
                            placeholder="请输入预估借款金额"
                            maxLength={100}
                            value={formatMoney(this.state.form.predictLoanAmount)}
                            onChange={(val) => { this.onChange(val, 'predictLoanAmount', 'format') }}
                        >
                            <font className='create-project__form__unit'>¥</font>
                        </InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>预估借款周期</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={loanMonth}
                            value={this.state.form.loanMonth}
                            title="预估借款周期"
                            onOk={val => this.onChange(val, 'loanMonth')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>{this.state.form.loanMonth.length > 0 ? '' : '请选择预估借款周期'}</List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>工程项目回款方式</div>
                    <div className='create-project__form__rate'>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                maxLength={100}
                                value={this.state.form.loanPayType}
                                onChange={(val) => { this.onChange(val, 'loanPayType', 'format') }}
                            ><span style={{ fontSize: '14px' }}>预付款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                labelNumber={6}
                                maxLength={100}
                                value={this.state.form.loanPayType}
                                onChange={(val) => { this.onChange(val, 'loanPayType', 'format') }}
                            ><span style={{ fontSize: '14px' }}>货到付款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                labelNumber={8}
                                maxLength={100}
                                value={this.state.form.loanPayType}
                                onChange={(val) => { this.onChange(val, 'loanPayType', 'format') }}
                            ><span style={{ fontSize: '14px' }}>安装进度款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                maxLength={100}
                                value={this.state.form.loanPayType}
                                onChange={(val) => { this.onChange(val, 'loanPayType', 'format') }}
                            ><span style={{ fontSize: '14px' }}>验收款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                maxLength={100}
                                value={this.state.form.loanPayType}
                                onChange={(val) => { this.onChange(val, 'loanPayType', 'format') }}
                            ><span style={{ fontSize: '14px' }}>交付款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                labelNumber={8}
                                maxLength={100}
                                value={this.state.form.loanPayType}
                                onChange={(val) => { this.onChange(val, 'loanPayType', 'format') }}
                            ><span style={{ fontSize: '14px' }}>审计结算款比例</span></InputItem>
                        </List>
                    </div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入回款方式和回款比例"
                            maxLength={100}
                            value={this.state.form.loanPayType}
                            onChange={(val) => { this.onChange(val, 'loanPayType', 'format') }}
                        ><span style={{ fontSize: '14px', color: '#333' }}>其它</span></InputItem>
                    </List>
                    <div className='create-project__form__title'>附件</div>
                    <div className='create-project__form__Image'>
                        <ImagePicker
                            length={5}
                            multiple
                            accept="image/gif,image/jpeg,image/jpg,image/png"
                            files={this.state.form.files}
                            onChange={this.onChangeFiles}
                            onImageClick={(index, fs) => this.openViewer(index, fs)}
                            selectable={this.state.form.files.length < 8}
                        />
                    </div>
                    {
                        this.state.isOpenImg
                            ? <WxImageViewer onClose={this.onCloseImageViewer.bind(this)} urls={this.state.imagsUrl} index={this.state.imagsIndex} />
                            : ""
                    }
                    {/* end form */}
                </div>
                <div className='submit'>
                    <div onClick={this.onSave} className='button' style={{ background: '#fff', flex: '1' }}>保存</div>
                    <div onClick={this.onApply} className='button' style={{ color: '#fff', background: '#4477BC', flex: '1' }}>提交申请</div>
                </div>

            </div >
        )
    }
}
export default createProject