import React, { useReducer } from 'react'

const initialState = {
    count: 0
}
const myReducer = (state, action) => {
    switch (action.type) {
        case "DECREMENT":
            return {
                count: state.count - 1
            }
            break;
        case "INCREMENT":
            return {
                count: state.count + 1
            }
            break;

        default:
            return {
                state
            }
            break;
    }
}
const CountReducxer = () => {
    const [state, dispatch] = useReducer(myReducer, initialState);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>Decrease</button>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>Increase</button>
        </div>
    )
}

export default CountReducxer
