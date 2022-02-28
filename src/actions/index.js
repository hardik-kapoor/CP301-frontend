import { SIGN_IN, SIGN_OUT } from './types';
import history from '../history';
import flask from '../apis/flask';

export const signIn = formVal => async (dispatch) => {
    const response = await flask.post('/login', formVal);
    if (!response.data.userId) {
        if (response.data.email_id)
            alert('Email ID does not exists!');
        else if (response.data.password)
            alert('Passwords do not match!');
        else
            alert('There is some error, please try again later.');
        return;
    }
    dispatch({ type: SIGN_IN, payload: response.data.userId });
    localStorage.setItem('user',response.data.userId);
    history.push('/');
};

export const signUp = formVal => async (dispatch) => {
    const response = await flask.post('/add_user', formVal);
    if (!response.data.userId) {
        if (response.data.username)
            alert('UserName already exists!');
        else if (response.data.email_id)
            alert('Account exists with same Email ID, please login');
        else
            alert('There is some error, please try again later.');
        return;
    }
    dispatch({ type: SIGN_IN, payload: response.data.userId });
    localStorage.setItem('user',response.data.userId);
    history.push('/');
};

export const signOut = () => {
    localStorage.clear();
    return {
        type: SIGN_OUT
    };
};
