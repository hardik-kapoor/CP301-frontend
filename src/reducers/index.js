import { combineReducers } from "redux";
import { reducer as formreducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formreducer
}); 