import {combineReducers} from "redux";
import accessory from './gitReducer';

const rootReducer = () => combineReducers({accessory});

export default rootReducer;