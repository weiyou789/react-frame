export function fixInputOniOS () {
    const u = navigator.userAgent
    let flag = false
    let myFunction = null
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isIOS) {
        window.addEventListener('focusin', () => {
            // 软键盘弹起事件
            flag = true
            if (myFunction) {
                clearTimeout(myFunction)
            }
        })
        window.addEventListener('focusout', () => {
            // 软键盘关闭事件
            flag = false
            if (!flag) {
                myFunction = setTimeout(function () {
                    // document.activeElement.scrollIntoViewIfNeeded(true)
                    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
                    window.scrollTo(0, Math.max(scrollHeight - 1, 0))
                }, 200)
            } else {
                return
            }
        })
    } else {
        // do nothing
    }
}