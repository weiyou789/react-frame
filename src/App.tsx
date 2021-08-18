import React, { useEffect } from 'react'
import AppRouter from '@/router/AppRouter'

function App () {
    useEffect(() => {
        console.log('全局设置区域')
    }, [])
    return (
        <AppRouter />
    )
}

export default App