import React, { useState, useEffect } from "react";

export default function FuncComp() {
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(true);
    useEffect(() => {
        if (count % 2 === 0) {
            console.log('我是useEffect hooks，我会在componentDidMount和componentDidUpdate时执行：' + count)
        }
        //useEffect的第二个参数（可选）是个数组，表示的是能够引起副作用执行的依赖,不选则任何状态的变化都会引起useEffect的执行
    }, [count]);

    useEffect(() => {
        //组件挂载
        const handleClick = () => { console.log(count) }
        document.addEventListener('click', handleClick)
        //return函数是一个清除函数，指的是可以清除上一次的状态，清除函数会优先于清除函数的外部执行
        return () => {
            //组件卸载（卸载会优先挂载前执行）
            console.log('我会在componentWillUnmount时执行')
            document.removeEventListener('click', handleClick)
        }
        //当useEffect的第2个参数为空数组时，表示清除函数外面是componentDidMount事件，清除函数里面是componentWillUnmount事件
    },[]);
    return (
        <>
            <button onClick={() => { setDisable(!disable) }}>{disable ? '禁用' : '启用'}</button>
            <h3>hello function Component {count} <button onClick={() => { setCount(count + 1) }}>变化</button> </h3>
        </>
    )
}