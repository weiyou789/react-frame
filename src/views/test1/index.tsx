import React, { useState,useMemo,useCallback,useEffect,useContext } from 'react';
import context,{ AsyDispatch } from '../../context.js'
import * as actions from '@/redux/testRedux'
import { Button } from 'antd'
import './index.scss'
interface Idispatch {
  [proppName:string]:any;
}

const Test1 = () => {
  const ctx = useContext(context);
  const { state:{test}, dispatch } = ctx
  const store =  AsyDispatch(actions,dispatch,test)
  let asyncDispatch:Idispatch = store.asyncDispatch
  const { add,minus } = asyncDispatch


  return (
    <div className='main'>
      测试22222
      <Button type='primary' onClick={()=>add()}>增加</Button>
      <Button type='primary' onClick={()=>minus()}>减少</Button>
      {test.num}
    </div>
  )
}

export default Test1