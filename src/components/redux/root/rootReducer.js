import { combineReducers } from 'redux';
import calculatorReducer from '../button/buttonReducer';

var combine = {
    calculator: calculatorReducer
}

export default combineReducers(combine) 