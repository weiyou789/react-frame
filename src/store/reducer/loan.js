import {SAVE_LOAN} from '../actions/actionTypes'

const initialState = {
    overview: {
        custCount: 0, // 客户数量
        loanCount: 0, // 贷款笔数
        loanAmt: 0, // 贷款金额
        overdueAmt: 0, // 逾期金额
        custCountComp: 0, // 客户比上月新增百分比
        loanCountComp: 0, // 贷款笔数你上月新增百分比
        loanAmtComp: 0, // 贷款金额比上月新增百分比
        overdueAmtComp: 0, // 逾期金额比上月降低百分比
      },
      loanStatistical: {
        balance: [],
        prebalance: [],
        new: [],
        prenew: [],
      },
      ageStatistical: {
        man: [],
        women: [],
      },
      ageAverage: {
        age: [],
        average: [],
      },
      userConver: {
        regist: [],
        real: [],
        loan: [],
      },
      product: [],
      cooperator: [],
    }

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LOAN:
            return {
                ...state,
                ...action.payLoad
            }
        default:
            return state
    }
}

