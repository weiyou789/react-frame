import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.scss'
import { Button } from 'antd-mobile';

export default class Modal extends Component {
    constructor (props){
        super(props);
        this.state = {
            _isOpened:this.props.isOpened
        }

    }

    componentWillReceiveProps(nextProps){
        const {_isOpened} = this.state;

        if(_isOpened != nextProps.isOpened){
            this.setState({
                _isOpened:nextProps.isOpened
            });
        }
    }

    onClose = (e) => {
        if(this.props.closeOnClickOverlay){
            this.onCancel();
        }
    }

    onCancel = (e) =>{
        this.setState({
            isOpened:false
        },
        this.props.onCancel())
    }

    onConfirm = (e) =>{
        this.props.onConfirm(e);
    }

    handleTouchMove = (e) =>{
        e.stopPropagation()
    }

    render () {
        const {_isOpened} = this.state;
        const {content,title,cancelText,confirmText,popup, animationType, openType} = this.props;
        // console.log(333111, this.props)

        const rootClass = classNames('mp-modal',{
            'mp-modal--active':_isOpened
        });


        let isPopUp = false;

        if (popup) {
            isPopUp = true
            // eslint-disable-next-line no-unused-expressions
            animationType === 'slide-up' ? 'slide-up' : 'slide-down'
        }


        const popUpClass = classNames(
            {
                'mp-modal__container': !isPopUp,
                'mp-modal__popup': isPopUp,
                [`mp-modal__popup-${animationType}`]: isPopUp && animationType
            }
        );

        const isRenderFooter = cancelText || confirmText;

        return (
            <div className={rootClass} onTouchMove={this.handleTouchMove}>

                <div className='mp-modal__overlay'> </div>
                <div className={popUpClass}>
                    {
                        title && <div className='mp-modal__title'>{title}</div>
                    }
                    <span className='mp-icon mp-icon-closemodal' style={{position:"absolute",top:"-11px",right:"-9px"}}  onClick={this.onClose}></span>
                    <div className='mp-modal__content'>
                        {content}
                    </div>
                    {
                        isRenderFooter && (
                            <div  className='mp-modal__footer'>
                                <div className='mp-modal__action'>
                                    {
                                        cancelText && <button type='button' onClick={this.onCancel}>{cancelText}</button>
                                    }
                                    {
                                        confirmText && !openType && <button type='button' onClick={this.onConfirm}>{confirmText}</button>
                                    }
                                    {
                                        confirmText && openType==='getUserInfo'&&<button type='button' open-type={openType||''} onGetUserInfo={this.onConfirm}>{confirmText}</button>
                                    }
                                    {
                                        confirmText && openType==='getPhoneNumber'&&<button type='button' open-type={openType||''} onGetPhoneNumber={this.onConfirm}>{confirmText}</button>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

Modal.defaultProps = {
    closeOnClickOverlay:true
}

Modal.propTypes = {
    title:PropTypes.string,
    isOpened:PropTypes.bool,
    onClose:PropTypes.func,
    onCancel:PropTypes.func,
    onConfirm:PropTypes.func,
    cancelText:PropTypes.string,
    confirmText:PropTypes.string,
    openType:PropTypes.string
}

