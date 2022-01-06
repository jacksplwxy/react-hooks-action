import React, { useReducer } from "react";

export default function FuncComp() {
    const initState = { count: 0, name: 'jacksplwxy' }
    const reduer = (state, action) => {
        const { type, payload } = action
        switch (type) {
            case "increment":
                return {...state, count: state.count + payload }
            case "decrement":
                return {...state,  count: state.count - 1 }
            case "rename":
                return {
                    ...state, 
                    name: payload
                }
            default:
                throw new Error()

        }
    }
    const [state, dispatch] = useReducer(reduer, initState)
    return (
        <div>
            reducer： {state.count} ---- {state.name} <br></br>
            <button onClick={() => { dispatch({ type: 'increment', payload: 2 }) }}>+</button>  
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>-</button> <br></br>
            <button onClick={() => { dispatch({ type: 'rename', payload: 'xiaoya' }) }}>改名</button> <br></br>
        </div>

    )
}