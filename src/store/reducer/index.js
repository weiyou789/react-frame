import { combineReducers } from 'redux'

// 所有reducer导出
import Mapreducer from './map'
import Equipreducer from './equipment'
import Loanreducer from './loan'
import Trandreducer from './trand'
import Customerreducer from './customer'
import Productreducer from './product'
export default combineReducers({Mapreducer,Equipreducer,Loanreducer,Trandreducer,Customerreducer,Productreducer})
