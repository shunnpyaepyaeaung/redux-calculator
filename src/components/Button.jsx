import React from 'react';
import { useDispatch } from 'react-redux';
import { showData,clearData,calculateData } from './redux/button/buttonAction';

function Button({value}) {
    const dispatch = useDispatch();
    function show(val){
        switch(val){
            case 'C':
                dispatch(clearData())
            break;
            case '=':
                dispatch(calculateData())
            break;
            default:
                dispatch(showData(val))
    
        }
    }

    return (
        <div className="Buttons">
            <button
            onClick={(e)=>{
                show(e.target.innerHTML)
            }}
            >{value}</button>
        </div>
    )
}

export default Button
