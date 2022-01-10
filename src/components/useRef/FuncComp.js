import React,{useRef,useEffect} from "react";

function Input(){
    const inputRef=useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, []);
    return <input ref={inputRef}></input>
}

const FInput=React.forwardRef((props,ref)=>{
    return <input ref={ref} {...props}></input>
})

export default function FuncComp(){
    return <>
        <Input></Input>
        <FInput placeholder="请输入..." ></FInput>
        </>
}