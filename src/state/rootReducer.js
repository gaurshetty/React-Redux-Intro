import { combineReducers } from 'redux';
import AmtReducer from './amount/AmtReducer';

const rootReducer = combineReducers({
    amount: AmtReducer
})

export default rootReducer
