import React,{useState} from "react";

export default function FuncComp(){
    const [count, setCount] = useState(0);
    return (
        <h3>hello function Component {count} <button onClick={()=>{setCount(count+1)}}>变化</button> </h3>
    )
}