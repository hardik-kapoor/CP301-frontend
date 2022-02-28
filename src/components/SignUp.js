import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import { ValidateEmail } from '../helperFunctions/SignUp';
import Header from './Header';
import './styles/SignUp.css';

class SignUp extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui">
                    <div className="header red text">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = formProps => {
        const classTwo = formProps.meta.touched && formProps.meta.error ? 'error' : '';
        return (
            <div className={`field ${classTwo}`}>
                <label>{formProps.label}</label>
                <input type={formProps.type} {...formProps.input} />
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.signUp(formValues);
    };

    render() {
        return (
            <>
                <Header />
                <div className='center'>
                    <h2 style={{ textAlign: 'center' }}>Sign up</h2>
                    <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <h3 className='ui dividing header'>Basic Information</h3>
                        <Field name="username" type='text' label="User Name" component={this.renderInput}></Field>
                        <Field name="email_id" type='text' label="Email ID" component={this.renderInput}></Field>
                        <Field name="password" type='password' label="Password" component={this.renderInput}></Field>
                        <Field name="re_enter_password" type='password' label="Re Enter Password" component={this.renderInput}></Field>
                        <button className='ui primary button'>Submit</button>
                    </form>
                </div>
            </>
        );
    }
};

const validate = formValues => {
    const errors = {};
    if (!formValues.username)
        errors.username = "Input a username";
    else if (formValues.username.length > 30)
        errors.username = "Username must be atmost 30 characters"
    if (!formValues.email_id)
        errors.email_id = "Input an Email Id";
    else if (!ValidateEmail(formValues.email_id))
        errors.email_id = "Input a valid Email Id";
    if (!formValues.password)
        errors.password = "Input a password";
    if (!formValues.re_enter_password)
        errors.re_enter_password = "Re Enter password";
    if (formValues.password && formValues.re_enter_password && formValues.password !== formValues.re_enter_password)
        errors.re_enter_password = "Passwords do not Match!"
    return errors;
};

const formWrapped = reduxForm({
    form: 'sign_in_form',
    validate
})(SignUp);

export default connect(null, { signUp })(formWrapped);