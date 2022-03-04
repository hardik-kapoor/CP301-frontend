import React from 'react';
import Header from '../Header';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class CreateBook extends React.Component{
    

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
        const srcc='https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg';
        return (
            <>
                <Header />
                <div className='ui two column grid'>
                    <div className='seven wide column'>
                        <div className='ui container'>
                            <img alt='' className="img-fluid rounded px-5 pt-5 pb-3" style={{width:'40vw',height:'70vh'}} src={srcc}/>               
                            <div className='px-5' style={{width:'40.25vw'}}>             
                                <button className='ui button blue'>Upload Image</button>
                                <button className='ui button blue float-end'>Search Google for images</button>
                            </div>
                        </div>
                    </div>
                    <div className='eight wide column p-5'>
                        <form className='ui form error'>
                            <h2 className='ui dividing header'>Book Details</h2>
                            <Field name='BookName' type='text' label="Book Name" component={this.renderInput} />
                            <Field name='BookAuthor' type='text' label="Book Author" component={this.renderInput} />
                            <Field name='BookType' type='text' label="Book Type" component={this.renderInput} />
                            <Field name='Cost' type='number' label="Cost" component={this.renderInput} />
                            <Field name='Description' type='text' label="Description" component={this.renderInput} />
                            <label className='ui header'>Relevant Courses</label>   
                            <div className='three fields'>
                                <Field name='course_code_1' type='text' label="Course Code" component={this.renderInput} />
                                <Field name='course_name_1' type='text' label="Course Name" component={this.renderInput} />
                                <Field name='course_dept_1' type='text' label="Department" component={this.renderInput} />
                            </div>
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