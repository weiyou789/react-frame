import React, { Component } from 'react';
// 导入组件
import { InputItem, Modal, TextareaItem, List, Picker, ImagePicker, Toast } from 'antd-mobile';
import WxImageViewer from 'react-wx-images-viewer';
// 导入样式
import './index.scss'
import { isNum, formatMoney } from '@/utils/format'
import { creatProject, uploadFiles } from '@/services/api'
import { progress, type, deviceCategory, loanMonth, upstreamSupplierType } from '@/utils/enum'

const rules = {
    projectName: { message: '请输入工程项目名称' },
    address: { message: '请输入项目地址' },
    firstPartName: { message: '请输入甲方名称' },
    type: { message: '请选择项目类别' },
    progress: { message: '请选择工程项目进度' },
    contractAmount: { message: '请输入合同总额' },
    deviceAmount: { message: '请输入设备款总额' },
    deviceCategory: { message: '请选择设备品类' },
    deviceBrand: { message: '请输入设备品牌' },
    upstreamSupplierType: { message: '请选择上游供应商类型' },
    upstreamSupplierName: { message: '请输入上游供应商名称' },
    upstreamPromiseMonth: { message: '请选择上游接受承兑时间' },
    predictLoanAmount: { message: '请输入预估借款金额' },
    loanMonth: { message: '请选择预估借款周期' }
}

class createProject extends Component {
    state = {
        isOpenImg: false,
        imagsUrl: [],
        imagsIndex: '',
        form: {
            status: '',//1：待提交2：审核中 3：资料收集中 4：待尽调 5：合作关闭 6：待签约 7：待放款 8：贷中 9：合作完成
            projectName: '',//工程项目名称，必填
            address: '',//项目地址，必填
            progress: '',//工程项目进度 ,1：项目跟踪阶段 2：招投标 3：合同已签订 4：项目已开工，必填
            type: '',//项目类别 1：地产项目 2：政府共建项目 3：市政项目 3：办公楼 4：厂房 5：其他，必填
            firstPartName: '',//甲方名称，必填
            contractAmount: '',//合同总额，必填
            deviceCategory: '',//设备品类 [] integer1：空调 2：采暖 3：新风 4：净水 5：智能化 6：辅材 7：电梯 8：其他，必填
            deviceBrand: '',//设备品牌，必填
            deviceAmount: '',//设备款总额，必填
            predictLoanAmount: '',//预估借款金额，必填
            loanMonth: '',//预估借款周期 ,integer，必填
            upstreamSupplierType: '',//上游供应商类型,integer 1：厂商 2：代理商 3：经销商，必填
            upstreamSupplierName: '',//上游供应商名称，必填
            upstreamPromiseMonth: '',//上游接受承兑时间,integer，必填
            advancePaymentProportion: '',//预付款比例
            deliveryPaymentProportion: '',//货到付款比例
            installProgressPaymentProportion: '',//安装进度款比例
            acceptancePaymentProportion: '',//验收款比例
            realPaymentProportion: '',//交付款比例
            auditCalculationPaymentProportion: '',//审计结算款比例
            payOtherText: '',//其他回款方式内容
            // attachmentUrl: [{
            //     url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
            // }]
        }
    }

    componentDidMount () {
    }


    onChange (val, key, isFormat = false, max = '') {
        let res = ''
        if (isFormat) {
            res = isNum(val, 100)//只能输入数字,可限制后几位（小数）
            if (isNaN(res)) res = ''
        }
        if (max) {
            if (val > max) {
                Toast.info('比例最大不能超过100%');
                return
            }
        }
        this.setState({
            form: {
                ...this.state.form,
                [key]: isFormat ? res : val
            }
        })
    }

    //附件上传或者删除 add or remove
    onChangeFiles = async (files, type, index) => {
        console.log('onChangeFiles');
        console.log(files, type, index);
        let len = this.state.form.attachmentUrl.length || 0
        let uploadLen = files.length
        for (let index = 0; index < (uploadLen - len); index++) {
            const data = await uploadFiles(files[len + index].url)
            console.log('data: ', data);

        }

        // if (type === 'add') {
        //     this.setState(
        //         {
        //             form: {
        //                 ...this.state.form,
        //                 attachmentUrl: files
        //             }
        //         }, () => {
        //             console.log(this.state.form);
        //         }
        //     )
        // }

    }
    // onAddImageClick = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         form: {
    //             ...this.state.form,
    //             attachmentUrl: this.state.form.files.concat({
    //                 url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
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

    onsubmit = async (params) => {
        await creatProject(params)
        setTimeout(() => {
            Toast.success('提交成功，请耐心等待总部审核')
        }, 600)
    }

    // 暂存
    onSave = async () => {
        if (this.state.form.projectName == '') {
            Toast.info('请输入工程项目名称');
            return
        }
        const params = this.formatParmas()
        this.onsubmit(params)
    }

    //格式化picker选择器获取的数据
    formatParmas = () => {
        let params = { ...this.state.form }
        params.progress = this.state.form.progress[0]
        params.type = this.state.form.type[0]
        params.deviceCategory = this.state.form.deviceCategory[0]
        params.loanMonth = this.state.form.loanMonth[0]
        params.upstreamSupplierType = this.state.form.upstreamSupplierType[0]
        params.upstreamPromiseMonth = this.state.form.upstreamPromiseMonth[0]
        params.status = status
        // params.attachmentUrl = null//todo
        return params
    }
    // 提交申请
    onApply = () => {
        let checked = true
        for (const key in rules) {
            if (this.state.form[key] == '') {
                Toast.info(rules[key].message);
                checked = false
                break
            }
        }
        if (checked) {
            const { advancePaymentProportion, deliveryPaymentProportion, installProgressPaymentProportion, acceptancePaymentProportion, realPaymentProportion, auditCalculationPaymentProportion, payOtherText } = this.state.form
            if (!advancePaymentProportion && !deliveryPaymentProportion && !installProgressPaymentProportion && !acceptancePaymentProportion && !realPaymentProportion && !auditCalculationPaymentProportion && !payOtherText) {
                Toast.info('工程项目回款方式至少填一项');
                return
            }
            const params = this.formatParmas()
            Modal.alert('去认证', '提交项目需要先为经销商认证', [
                {
                    text: '暂不认证', onPress: () => {
                        // do nothing
                    }
                },
                {
                    text: '去认证', onPress: async () => {
                        this.onsubmit(params)
                    }
                },
            ])
        }
    }

    getLabel = (type, val) => {
        let obj = {}
        type.forEach(item => {
            obj[item.value] = item.label
        })
        return obj[val] || '-'
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
                            value={this.state.form.address}
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
                            value={this.state.form.firstPartName}
                            onChange={(val) => { this.onChange(val, 'firstPartName') }}
                        ></InputItem>
                    </List>
                    <div className='create-project__form__title'><i>*</i>项目类别</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={type}
                            value={[`${this.state.form.type}`]}
                            title=""
                            onOk={val => this.onChange(val, 'type')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>
                                {this.state.form.type ? <span className='pickertext'>{this.getLabel(type, this.state.form.type)}</span> : '请选择项目类别'}
                            </List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>工程项目进度</div>
                    <List>
                        <Picker
                            extra=" "
                            cols={1}
                            data={progress}
                            value={[`${this.state.form.progress}`]}
                            title=""
                            onOk={val => this.onChange(val, 'progress')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>
                                {this.state.form.progress ? <span className='pickertext'>{this.getLabel(progress, this.state.form.progress)}</span> : '请选择工程项目进度'}
                            </List.Item>
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
                            data={deviceCategory}
                            value={[`${this.state.form.deviceCategory}`]}
                            title=""
                            onOk={val => this.onChange(val, 'deviceCategory')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>
                                {this.state.form.deviceCategory ? <span className='pickertext'>{this.getLabel(deviceCategory, this.state.form.deviceCategory)}</span> : '请选择设备品类'}
                            </List.Item>
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
                            value={[`${this.state.form.upstreamSupplierType}`]}
                            title=""
                            onOk={val => this.onChange(val, 'upstreamSupplierType')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>
                                {this.state.form.upstreamSupplierType ? <span className='pickertext'>{this.getLabel(upstreamSupplierType, this.state.form.upstreamSupplierType)}</span> : '请选择上游供应商类型'}
                            </List.Item>
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
                            value={[`${this.state.form.upstreamPromiseMonth}`]}
                            title=""
                            onOk={val => this.onChange(val, 'upstreamPromiseMonth')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>
                                {this.state.form.upstreamPromiseMonth ? <span className='pickertext'>{this.getLabel(loanMonth, this.state.form.upstreamPromiseMonth)}</span> : '请选择上游接受承兑时间'}
                            </List.Item>
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
                            value={[`${this.state.form.loanMonth}`]}
                            title=""
                            onOk={val => this.onChange(val, 'loanMonth')}
                        >
                            <List.Item arrow="horizontal" className='chooseprogress'>
                                {this.state.form.loanMonth ? <span className='pickertext'>{this.getLabel(loanMonth, this.state.form.loanMonth)}</span> : '请选择预估借款周期'}
                            </List.Item>
                        </Picker>
                    </List>
                    <div className='create-project__form__title'><i>*</i>工程项目回款方式（至少填一项）</div>
                    <div className='create-project__form__rate'>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                maxLength={100}
                                value={this.state.form.advancePaymentProportion}
                                onChange={(val) => { this.onChange(val, 'advancePaymentProportion', 'format', 100) }}
                            ><span className='create-project__form__rate__text'>预付款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                labelNumber={6}
                                maxLength={100}
                                value={this.state.form.deliveryPaymentProportion}
                                onChange={(val) => { this.onChange(val, 'deliveryPaymentProportion', 'format', 100) }}
                            ><span className='create-project__form__rate__text'>货到付款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                labelNumber={8}
                                maxLength={100}
                                value={this.state.form.installProgressPaymentProportion}
                                onChange={(val) => { this.onChange(val, 'installProgressPaymentProportion', 'format', 100) }}
                            ><span className='create-project__form__rate__text'>安装进度款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                maxLength={100}
                                value={this.state.form.acceptancePaymentProportion}
                                onChange={(val) => { this.onChange(val, 'acceptancePaymentProportion', 'format', 100) }}
                            ><span className='create-project__form__rate__text'>验收款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                maxLength={100}
                                value={this.state.form.realPaymentProportion}
                                onChange={(val) => { this.onChange(val, 'realPaymentProportion', 'format', 100) }}
                            ><span className='create-project__form__rate__text'>交付款比例</span></InputItem>
                        </List>
                        <List>
                            <InputItem
                                clear
                                placeholder="请输入比例"
                                extra="%"
                                labelNumber={8}
                                maxLength={100}
                                value={this.state.form.auditCalculationPaymentProportion}
                                onChange={(val) => { this.onChange(val, 'auditCalculationPaymentProportion', 'format', 100) }}
                            ><span className='create-project__form__rate__text'>审计结算款比例</span></InputItem>
                        </List>
                    </div>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入回款方式和回款比例"
                            maxLength={100}
                            value={this.state.form.payOtherText}
                            onChange={(val) => { this.onChange(val, 'payOtherText', 'format') }}
                        ><span className='create-project__form__rate__text'>其它</span></InputItem>
                    </List>
                    <div className='create-project__form__title'>附件</div>
                    <div className='create-project__form__Image'>
                        {/* <ImagePicker
                            length={5}
                            multiple
                            accept="image/gif,image/jpeg,image/jpg,image/png"
                            files={this.state.form.attachmentUrl}
                            onChange={this.onChangeFiles}
                            onImageClick={(index, fs) => this.openViewer(index, fs)}
                            selectable={this.state.form.attachmentUrl.length < 8}
                        /> */}
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