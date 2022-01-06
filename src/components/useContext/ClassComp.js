import React from "react";

export default class ClassComp extends React.Component{

    render(){
        return ( <h4>当父级组件的属性需要传到孙级组件时，子级组件不得不通过props接收父级组件的属性，孙级组件再不得不通过props接收子级组件的属性。要这样一层一层才能拿到属性数据</h4> )
    }
}