import {combineReducers} from 'redux';
import todoReducer from './Todo/todoReucer';
import categoryReducer from './Categories/categoryReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    category: categoryReducer
})

export default rootReducer