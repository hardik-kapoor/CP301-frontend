import React from 'react';
import { Field, formValues, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Header from './Header';
import './styles/SignUp.css';

class SignUp extends React.Component{
    
    renderInput = formProps =>{
        return(
            <div className='field'>
                <label>{formProps.label}</label>
                <div className='field'>
                    <input type={formProps.type} {...formProps.input} />
                </div>
            </div>
        );
    };
    
    onSubmit = (formValues) => {
        this.props.onFormSubmit(formValues);
    };
    
    render(){
        console.log(this.props);
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
    const errors={};
    
};

const formWrapped = reduxForm({
    form: 'sign_in_form',
    validate
})(SignUp);

export default connect(null)(formWrapped);