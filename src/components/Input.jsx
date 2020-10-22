import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Input() {
    const data = useSelector(state=>state.calculator)
    const [Inputval, setInputVal] = useState('')
    return (
        <div className="result">
            <input 
            onChange={(e)=>{
                setInputVal(e.target.value)
            }}
            value={data}
            type="text"></input>
        </div>
        )
}

export default Input
