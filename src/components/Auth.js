import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp, signIn } from '../actions';
// import Swal from 'sweetalert2';
import { ValidateEmail } from '../helperFunctions/SignUp';
import './styles/SignUp.css';

let type = "";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isButtonDisabled: 0, redirect: false };
        this.didUnmount = false;
        type = this.props.type;
    }

    componentDidMount(){
        if(!this.props.location.state)
            return;
        // await Swal.fire({
        //         text: 'You need to login to Access this page',
        //         icon: 'error',
        // });
        alert('You need to login to Access this page');
    }

    componentWillUnmount() {
        this.didUnmount = true;
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui">
                    <div className="text-danger">
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

    onSubmit = async (formValues) => {
        this.setState({ isButtonDisabled: 1 });
        if (this.props.type === 'Log In')
            await this.props.signIn(formValues);
        else
            await this.props.signUp(formValues);
        if (this.props.isSignedIn === true)
            this.setState({ redirect: true });
        if (!this.didUnmount)
            this.setState({ isButtonDisabled: 0 });
    };

    renderFields = () => {
        if (this.props.type === 'Log In') {
            return (
                <>
                    <Field name="email_id" type='text' label="Email ID" component={this.renderInput}></Field>
                    <Field name="password" type='password' label="Password" component={this.renderInput}></Field>
                </>
            );
        }
        else {
            return (
                <>
                    <Field name="username" type='text' label="User Name" component={this.renderInput}></Field>
                    <Field name="email_id" type='text' label="Email ID" component={this.renderInput}></Field>
                    <Field name="password" type='password' label="Password" component={this.renderInput}></Field>
                    <Field name="re_enter_password" type='password' label="Re Enter Password" component={this.renderInput}></Field>
                </>
            );
        }
    };


    render() {
        console.log(this.props);
        if (this.state.redirect)
            return <Redirect to={this.props.location.state?.from || '/'} />;
        return (
            <>
                <Header />
                <div className='center'>
                    <h2 style={{ textAlign: 'center' }}>{this.props.type}</h2>
                    <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <h3 className='ui dividing header'>Basic Information</h3>
                        {this.renderFields()}
                        <button disabled={this.state.isButtonDisabled} className='ui primary button'>Submit</button>
                    </form>
                </div>
            </>
        );
    }
};

const validate = formValues => {
    const errors = {};
    if (type === 'Sign Up') {
        if (!formValues.username)
            errors.username = "Input a username";
        else if (formValues.username.length > 30)
            errors.username = "Username must be atmost 30 characters"
    }
    if (!formValues.email_id)
        errors.email_id = "Input an Email Id";
    else if (!ValidateEmail(formValues.email_id))
        errors.email_id = "Input a valid Email Id";
    if (!formValues.password)
        errors.password = "Input a password";
    if (type === 'Sign Up') {
        if (!formValues.re_enter_password)
            errors.re_enter_password = "Re Enter password";
        if (formValues.password && formValues.re_enter_password && formValues.password !== formValues.re_enter_password)
            errors.re_enter_password = "Passwords do not Match!"
    }
    return errors;
};

const formWrapped = reduxForm({
    form: 'auth_form',
    validate
})(Auth);

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signUp, signIn })(withRouter(formWrapped));