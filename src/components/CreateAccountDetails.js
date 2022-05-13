import React, { setState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import flask from '../apis/flask';
import history from '../history';
import './styles/SignUp.css';

class CreateAccountDetails extends React.Component {

    state = { isButtonDisabled: 0 };
    // const [isButtonDisabled, this.setState] = useState(0);

    onSubmit = async (formValues) => {
        this.setState({ isButtonDisabled: 1 });
        formValues = { ...formValues, user_id: this.props.userId };
        const fd=new FormData();
        fd.append('data', JSON.stringify(formValues));
        const response = await flask.post('/accountdetailspost', fd);
        this.setState({ isButtonDisabled: 0 });
        history.push('/');
    };

    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); //<===== This stops the form from being submitted
        }
    }

    renderError = ({ error, touched }) => {
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
        let temp = formProps.width.toString();
        // console.log(temp);
        temp = temp + '%';
        // console.log(formProps.width);
        // console.log(toString(formProps.width)+"%");
        return (
            <div className={`field ${classTwo}`} style={{ width: temp }}>
                <label>{formProps.label}</label>
                <input type={formProps.type} {...formProps.input} />
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    renderFields = () => {
        return (
            <div className='constainer'>
                <Field name="name" type='text' label="Name" component={this.renderInput} width={100}></Field>
                <Field name="roll_no" type='text' label="Roll Number" component={this.renderInput} width={100}></Field>
                <div className='row'>
                    <Field name="hostel_name" type='text' label="Hostel Name" component={this.renderInput} width={50}></Field>
                    <Field name="room_no" type='text' label="Room Number" component={this.renderInput} width={50}></Field>
                </div>
                <Field name="phone_number" type='text' label="Phone Number" component={this.renderInput} width={100}></Field>
            </div>
        );

    };

    render() {
        return (
            <>
                <div className='center'>
                    <h2 style={{ textAlign: 'center' }}>Account Details</h2>
                    <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)} onKeyPress={this.onKeyPress}>
                        <h3 className='ui dividing header'>Basic Information</h3>
                        {this.renderFields()}
                        <br></br>
                        <button disabled={this.state.isButtonDisabled} className='ui primary button'>Submit</button>
                    </form>
                </div>
            </>
        );
    }
};

const validate = formValues => {
    const errors = {};
    if (!formValues.name)
        errors.name = "Input a name";
    if (!formValues.hostel_name)
        errors.hostel_name = "Input hostel Name";
    if (!formValues.room_no)
        errors.room_no = "Input your room number";
    if (!formValues.roll_no)
        errors.roll_no = "Input your roll number";
    if (!formValues.phone_number)
        errors.phone_number = "Input your phone number";
    return errors;
};

const formWrapped = reduxForm({
    form: 'auth_form',
    validate
})(CreateAccountDetails);

const mapStateToProps = (state) => {
    return { ...state.auth };
};

export default connect(mapStateToProps)(withRouter(formWrapped));
