import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../redux/projectRedux'

import WxImageViewer from 'react-wx-images-viewer';
import './index.scss'
import { isNum, formatMoney } from '@/utils/format'
import { progress, type, deviceCategory, upstreamSupplierType } from '@/utils/enum'



@connect(
    state => state.project,
    dispatch => bindActionCreators(actions, dispatch)
)
class ProjectDetail extends Component {
    state = {
        sOpenImg: false,
        imagsUrl: [],
        imagsIndex: ''
    }

    getDetail = async () => {
        await this.props.getDetail(1)
    }

    componentDidMount () {
        // status  1：待提交2：审核中 3：资料收集中 4：待尽调 5：合作关闭 6：待签约 7：待放款 8：贷中 9：合作完成
        this.getDetail()
        // this.getLabel(upstreamSupplierType, 1)

    }

    getLabel = (type, val) => {
        let obj = {}
        type.forEach(item => {
            obj[item.value] = item.label
        })
        return obj[val] || '-'
    }

    onCloseImageViewer (val) {
        document.body.style.overflow = 'auto';
        this.setState({
            isOpenImg: false,
        })
    }

    render () {
        const { detail } = this.props
        return (
            <div className='project-detail'>
                <div className='project-detail__status'>
                    <img src="https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg" width='54' height='54' />
                    <p>审核中</p>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>经销商</div>
                    <div className='project-detail__content'>江苏舒适云信息技术有限公司</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>工程项目名称</div>
                    <div className='project-detail__content'>{detail.projectName}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>甲方名称</div>
                    <div className='project-detail__content'>{detail.firstPartName}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>项目地址</div>
                    <div className='project-detail__content'>{detail.address}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>项目类别</div>
                    <div className='project-detail__content'>{this.getLabel(type, detail.type)}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>工程项目进度</div>
                    <div className='project-detail__content'>{this.getLabel(progress, detail.progress)}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>合同总额</div>
                    <div className='project-detail__content'><span>¥</span>{formatMoney(detail.contractAmount + '')}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>设备款总额</div>
                    <div className='project-detail__content'><span>¥</span>{formatMoney(detail.deviceAmount + '')}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>设备品类</div>
                    <div className='project-detail__content'>{this.getLabel(deviceCategory, detail.deviceCategory)}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>设备品牌</div>
                    <div className='project-detail__content'>{detail.deviceBrand}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>上游供应商类型</div>
                    <div className='project-detail__content'>{this.getLabel(upstreamSupplierType, detail.upstreamSupplierType)}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>上游供应商名称</div>
                    <div className='project-detail__content'>{detail.upstreamSupplierName}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>上游接受承兑时间</div>
                    <div className='project-detail__content'>{detail.upstreamPromiseMonth}个月</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>预估借款金额</div>
                    <div className='project-detail__content'><span>¥</span>{formatMoney(detail.predictLoanAmount + '')}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>预估借款周期</div>
                    <div className='project-detail__content'>{detail.loanMonth}个月</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite' style={{ marginBottom: '6px' }}>工程项目回款方式</div>
                    <div className='project-detail__noborder'>预付款比例：{detail.advancePaymentProportion}%</div>
                    <div className='project-detail__noborder'>货到付款比例：{detail.deliveryPaymentProportion}%</div>
                    <div className='project-detail__noborder'>安装进度款比例：{detail.installProgressPaymentProportion}%</div>
                    <div className='project-detail__noborder'>验收款比例：{detail.acceptancePaymentProportion}%</div>
                    <div className='project-detail__noborder'>交付款比例：{detail.realPaymentProportion}%</div>
                    <div className='project-detail__noborder'>审计结算款比例：{detail.auditCalculationPaymentProportion}%</div>
                    <div className='project-detail__content'>其他：{detail.payOtherText}</div>
                </div>
                <div className='project-detail__layout'>
                    <div className='project-detail__tite'>附件</div>
                    <div className='project-detail__img'>
                        <img src='https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg' />
                        <img src='https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg' />
                        <img src='https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg' />
                        <img src='https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg' />
                        <img src='https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg' />
                        <img src='https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg' />
                        <img src='https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg' />
                        <img src='https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg' />
                    </div>
                </div>
                <div className='submit'>
                    <div className='button' >查看项目审批记录</div>
                </div>
                {
                    this.state.isOpenImg
                        ? <WxImageViewer onClose={this.onCloseImageViewer.bind(this)} urls={this.state.imagsUrl} index={this.state.imagsIndex} />
                        : ""
                }
            </div >
        )
    }
}
export default ProjectDetail