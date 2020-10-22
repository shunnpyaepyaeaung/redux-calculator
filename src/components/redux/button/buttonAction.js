export const CLEAR = 'CLEAR';
export const SHOW = 'SHOW';
export const CALCULATE = 'CALCULATE';

export function clearData(){
    return {
        type: CLEAR,
    }
}

export function showData(value){
    return {
        type: SHOW,
        payload:value
    }
}

export function calculateData(){
    return {
        type: CALCULATE
    }
}