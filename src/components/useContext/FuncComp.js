import React, { useState, useContext } from "react";

const themeContext = React.createContext('yellow')

const Son1 = () => {
    const bgColor = useContext(themeContext)
    const style = {
        height: '10px',
        backgroundColor: bgColor
    }
    return <div style={style}></div>
}
const Son2 = () => {
    return (
        <themeContext.Consumer>
            {value => <div style={{ height: '10px', marginTop:'10px',backgroundColor: value }}></div>}
        </themeContext.Consumer>
    )
}
const Father = () => {
    return (
        <div>
            <Son1></Son1>
            <Son2></Son2>
        </div>
    )
}

export default function FuncComp() {
    const [bgColor, setBgColor] = useState('yellow');
    return <>
        <div>
            <button onClick={() => { setBgColor('red') }}> 换色</button>
            <themeContext.Provider value={bgColor}>
                <Father></Father>
            </themeContext.Provider>
        </div>
    </>
}