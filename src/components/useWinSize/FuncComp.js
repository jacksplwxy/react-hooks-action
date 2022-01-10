import React from 'react'
import UseWinSize from '../customHooks/useWinSize'


export default function customHooks(){
    const size = UseWinSize()
    return (
        <div>页面Size:{size.width}x{size.height}</div>
    )
}