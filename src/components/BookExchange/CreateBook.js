import React from 'react';
import Header from '../Header';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class CreateBook extends React.Component{
    constructor(props){
        super(props);
    }

    renderInput = formProps =>{
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input type={formProps.type} {...formProps.input} />
                {/* {this.renderError(formProps.meta)} */}
            </div>
        );
    };


    
    render(){
        return (
            <>
                <Header />
                <div className='ui two column grid'>
                    <div className='six wide column'>
                        
                    </div>
                    <div className='wide column p-5'>
                        <form className='ui form error'>
                            <Field name='BookName' type='text' label="Book Name" component={this.renderInput} />
                            <Field name='BookType' type='text' label="Book Type" component={this.renderInput} />
                            <Field name='Cost' type='number' label="Cost" component={this.renderInput} />

                        </form>
                    </div>
                </div>
            </>
        );
    }
};

const validate=()=>{
};

const wrapped=reduxForm({
    form:'book_create',
    validate
})(CreateBook);

export default connect(null)(wrapped);