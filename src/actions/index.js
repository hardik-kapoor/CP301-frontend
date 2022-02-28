import { SIGN_IN, SIGN_OUT,SIGN_UP } from './types';
import history from '../history';
import flask from '../apis/flask';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signUp = formVal => async(dispatch) =>{
    const response = await flask.post('/add_user',formVal);
    console.log(response);
    dispatch({type:SIGN_UP,payload:response.data});
    //history.push('/');
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
