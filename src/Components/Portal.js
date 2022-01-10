import React, { useReducer, useState } from 'react'
import { PorterReducer } from '../Reducer/PorterReducer';
import { PorterState } from '../Store/PorterState';

const Portal = () => {
    const [state, dispatch] = useReducer(PorterReducer, PorterState);
    const [data, setData] = useState('')
    return (
        <div>

            <input type="text" onChange={(e) => setData(e.target.value)} />
            <button onClick={dispatch({ type: 'value', data: data })}>Submit</button>

            {
                state.theData.map(data => (
                    <h1>{data.name}</h1>
                ))
            }

        </div>
    )
}

export default Portal
