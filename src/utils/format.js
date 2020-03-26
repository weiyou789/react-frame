function numValidate (str, float, regular, regular2) {
    if (!str) return
    str = str.toString()
    // 如果第一位是0，第二位不是点  01 02...
    if (str.length > 1 && str.charAt(0) === '0' && str.charAt(1) !== '.') {
        return ''
    }
    // float == 0仅允许输入非负整数
    if (float == 0 && str.indexOf('.') > -1) {
        return str.split('.')[0]
    }
    const i = str.indexOf('.')
    let arr
    if (i !== -1) {
        str = str.replace(regular2, '')
        arr = str.split('.')
        str = arr[0]
    }
    const reg = regular
    let newStr = str.replace(reg, '')
    newStr = float === 0 ? str.slice(0, str.length) : newStr
    const newStrFlot = arr && arr[1].replace(reg, '')

    return float !== 0 && i !== -1 ? newStr + '.' + newStrFlot.slice(0, float) : newStr
}
//只能输入数字,可限制后几位（小数）
function isNum (str, float = 1000000000) {
    const regular = /[^0-9]*/g
    const regular2 = /[^\d^\\.]+/g
    return numValidate(str, float, regular, regular2)
}
//只能输入数字(可以负数),可限制后几位（小数）
function isNegative (str, float = 1000000000) {
    const regular = /[^\-?\d.]/g
    const regular2 = /[^\d^\\.\\-]+/g
    return numValidate(str, float, regular, regular2)
}
//不能输入中文
function isNotInputTxt (str) {
    return str.replace(/[^\d^]+/g, '')
}
// 正整数
function isPositiveInt (str) {
    const regular = /[^0-9]*/g
    if (!str) return
    if (str == 0) {
        return ''
    }
    str = str.toString()
    // 仅允许输入整数
    if (str.indexOf('.') > -1) {
        return str.split('.')[0]
    }
    return str.replace(regular, '')
}
function formatMoney (val) {
    let money = ''
    let pointNum = ''
    if (val.indexOf('.') > 0) {
        money = val.split(".")[0]
        pointNum = val.split(".")[1]
        return money.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + pointNum
    } else {
        money = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return money

    }
    // let money = ''
    // let pointNum = ''
    // if (val.split(".").length > 1) {
    //     console.log(val.split("."));
    //     money = val.split(".")[0]; //取出前面的整数值
    //     pointNum = val.split(".")[1]
    // }
    // console.log('pointNum', pointNum);
    // console.log('money', money);
    // if (money) {
    //     const res = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    //     return res + pointNum
    // }
    // return ''
}

export {
    isNum,
    isNegative,
    isNotInputTxt,
    isPositiveInt,
    formatMoney
}