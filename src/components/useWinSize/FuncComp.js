import React,{useState,useEffect, useCallback,useMemo} from "react";

export default function FuncComp(){
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);
    useEffect(() => {
       setInterval(() => {
        setOtherCount(otherCount=>otherCount+1)
       }, 200);
       setInterval(() => {
           setCount(count=>count+1)
       }, 1000);
    }, []);
    //useCallback用户存储函数体，但依赖不发生改变时，函数体不会更改，而是直接从内存中取出，可以提升性能
    const handleClick=useCallback(()=>{
        console.log(count)
    })
    //useMemo类似于vue中的computed，只有当依赖变化时返回才会重新计算进行返回，可以提升性能
    const result=useMemo(()=>{
        console.log('计算')
        return count*100
    },[count])
    console.log('更新..')
    return (
        <div onClick={handleClick}>{count}---{otherCount}---{result} </div>
    )
}