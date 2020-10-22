import { CALCULATE, CLEAR, SHOW } from "./buttonAction";

export default function calculatorReducer(state=0, action){
    switch(action.type){
        case CLEAR:
            return 0;
        case SHOW:
            if(state === 0){
                return action.payload
            }
            return state+action.payload
        case CALCULATE:
            return eval(state);
        default:
            return state;
    }
}