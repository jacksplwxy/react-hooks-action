import React from "react";

export default class ClassComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render(){
        const {count}=this.state
        return ( <h3>hello class Component {count} <button onClick={()=>{this.setState({count:count+1})}}>变化</button>    </h3> )
    }
}