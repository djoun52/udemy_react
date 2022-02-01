import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reducers/counterReducer';
import addCartReducer from './reducers/addCartReducer';
import dataImgReducer from './reducers/dataImgReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counterReducer,
    addCartReducer,
    dataImgReducer
})

const customeMiddleware = store => next => action => {
    next(action);
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;