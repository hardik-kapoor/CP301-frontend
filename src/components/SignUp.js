import React from 'react';
import { Helmet } from 'react-helmet';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Header from './Header';
import './styles/SignUp.css';

const SignUp = props => {
    console.log(props);

    const renderInput = formProps =>{
        return(
            <div className='field'>
                <label>{formProps.label}</label>
                <div className='field'>
                    <input type={formProps.type} {...formProps.input} />
                </div>
            </div>
        );
    };

    const onSubmit = (formValues) => {
        props.onFormSubmit(formValues);
    };

    return (
        <>
            <Header />
            <div className='center'>
                <h2 style={{ textAlign: 'center' }}>Sign up</h2>
                <form className='ui form error' onSubmit={props.handleSubmit(onSubmit)}>
                    <h3 className='ui dividing header'>Basic Information</h3>
                    <Field name="username" type='text' label="User Name" component={renderInput}></Field>
                    <Field name="email_id" type='text' label="Email ID" component={renderInput}></Field>
                    <Field name="password" type='password' label="Password" component={renderInput}></Field>
                    <Field name="re_enter_password" type='password' label="Re Enter Password" component={renderInput}></Field>
                    <div className='field'>
                        <label>temp</label>
                        <div className='field'>
                            <input type='text' name='text'/>
                        </div>
                    </div>
                    <button className='ui primary button'>Submit</button>
                </form>
            </div>
        </>
    );
};

const formWrapped = reduxForm({
    form: 'sign_in_form'
})(SignUp);

export default connect(null)(formWrapped);