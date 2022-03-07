import React from 'react';
import Header from '../Header';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Select from 'react-select';
import { departments } from '../../objects';
import flask from '../../apis/flask';

let howMany = 0;
class CreateBook extends React.Component {
    state = { counter: 0, elem: [] ,srcImage:'https://semantic-ui.com/images/wireframe/white-image.png'};

    bookTypeOptions = [
        { value: 'College_Course_Work', label: 'College Course Work' },
        { value: 'Fiction', label: 'Fiction' },
        { value: 'Non_College', label: 'Non College work' },
        { value: 'other', label: 'Other' }
    ];

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

    renderDropDown = formProps => {
        const classTwo = formProps.meta.touched && formProps.meta.error ? 'error' : '';
        return (
            <div className={`field ${classTwo}`}>
                <label>{formProps.label}</label>
                <Select
                    {...formProps.input}
                    onBlur={() => formProps.input.onBlur(formProps.input.value)}
                    onChange={value => formProps.input.onChange(value)}
                    options={formProps.options}
                    menuPlacement={formProps.menuPlacement}
                />
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    fileChange = e =>{
        // console.log(e.target.files[0]);
        let reader = new FileReader();      //js api
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = ()=>{
            this.setState({
                srcImage: reader.result,
                file:e.target.files[0]
            });
        }
    };

    removeField = () => {
        if (this.state.counter === 0)
            return;
        howMany--;
        this.setState((prev) => {
            const temp = prev.elem;
            temp.pop();
            this.props.change(`course_code_${prev.counter}`, undefined);
            this.props.change(`course_name_${prev.counter}`, undefined);
            this.props.change(`course_dept_${prev.counter}`, undefined);
            return {
                counter: prev.counter - 1,
                elem: [...temp]
            }
        }
        );
    }


    renderRelevantCourseInput =() => {
        // console.log(this.props);
        howMany++;
        this.setState((prev) => {
            return {
                counter: prev.counter + 1,
                elem: [...prev.elem,
                <div className='three fields' key={prev.counter + 1}>
                    <Field name={`course_code_${prev.counter + 1}`} type='text' label="Course Code" component={this.renderInput} />
                    <Field name={`course_name_${prev.counter + 1}`} type='text' label="Course Name" component={this.renderInput} />
                    <Field name={`course_dept_${prev.counter + 1}`} menuPlacement='top' label="Department" options={departments} component={this.renderDropDown} />
                </div>
                ]
            }
        },
            ()=>{
                this.props.change(`course_code_${this.state.counter}`, null);
            }
        );
    };


    onSubmit = async (formValues) => {
        if(!this.state.file){
            alert('Upload an image please!');
            return;
        }
        const fd=new FormData()
        fd.append('file',this.state.file,this.state.file.name);
        fd.append('data',JSON.stringify(formValues));
        console.log('posting');
        const response=await flask.post('/bookcreate',fd);
        console.log(response);
    }

    render() {
        const imgStyle={ maxWidth: '40vw', maxHeight: '70vh' , display:'block',marginLeft:'auto',marginRight:'auto'}
        return (
            <>
                <Header />
                <div className='ui two column grid'>
                    <div className='seven wide column'>
                        <div className='ui container'>
                            <img alt='' className="img-fluid rounded px-5 pt-5 pb-3" style={imgStyle} src={this.state.srcImage} />
                            <div className='px-5' style={{ width: '40.25vw' }}>
                                <input className='form-control bg-blue' type='file' accept='.jpg, .png, .jpeg' onChange={this.fileChange}></input>
                                {/* <button className='ui button blue'>Upload Image</button>
                                <button className='ui button blue float-end'>Search Google for images</button> */}
                            </div>
                        </div>
                    </div>
                    <div className='eight wide column p-5'>
                        <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <h2 className='ui dividing header'>Book Details</h2>
                            <Field name='BookName' type='text' label="Book Name" component={this.renderInput} />
                            <Field name='BookAuthor' type='text' label="Book Author" component={this.renderInput} />
                            <Field name='BookType' label="Book Type" options={this.bookTypeOptions} component={this.renderDropDown} />
                            <Field name='Description' type='text' label="Description" component={this.renderInput} />
                            <Field name='Cost' type='number' label="Cost" component={this.renderInput} />
                            <div>
                                <label className='ui header'>Relevant Courses</label>
                                <i className="minus circle icon large float-end" style={{ cursor: 'pointer' }} onClick={() => this.removeField()}></i>
                                <i className="plus circle icon large float-end" style={{ cursor: 'pointer' }} onClick={() => this.renderRelevantCourseInput()}></i>
                            </div>
                            {this.state.elem}
                            <button className='d-block ui button blue'>Submit</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
};

const validate = formValues => {
    const errors = {};
    // console.log(formValues);
    if (!formValues.BookName)
        errors.BookName = "Please enter Book Name";
    if (!formValues.BookAuthor)
        errors.BookAuthor = "Please enter Book Author";
    if (!formValues.BookType)
        errors.BookType = "Please enter Book Type";
    for (let i = 1; i <= howMany; i++) {
        if (!formValues[`course_code_${i}`])
            errors[`course_code_${i}`] = "Please enter course code";
        if (!formValues[`course_name_${i}`])
            errors[`course_name_${i}`] = "Please enter course name";
        if (!formValues[`course_dept_${i}`])
            errors[`course_dept_${i}`] = "Please enter course department";
    }
    return errors;
};

const wrapped = reduxForm({
    form: 'book_create',
    validate,
    initialValues: {
        Cost: '0'
    }
})(CreateBook);


export default connect(null)(wrapped);