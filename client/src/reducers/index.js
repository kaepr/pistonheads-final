import { combineReducers } from 'redux';
import toasts from './toasts';
import auth from './auth';

export default combineReducers({
    auth,
    toasts
})