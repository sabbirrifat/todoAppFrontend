import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const store = createStore(rootReducer, applyMiddleware(Thunk));

export default store