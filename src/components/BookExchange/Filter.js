import React, { useState } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { departments } from '../../objects';

const animatedComponents = makeAnimated();

const bookTypeOptions = [
    { value: 'College_Course_Work', label: 'College Course Work' },
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Non_College', label: 'Non College work' },
    { value: 'other', label: 'Other' }
];

const Filter = props => {
    const [course, setcourse] = useState('');
    const [dept, setdept] = useState([]);
    const [type, settype] = useState([]);

    const onSubmit = () => {

    };

    const handlechange = e =>{
        console.log(e);
    };

    return (
        <>
            <div className='h2 text-center'>Filter Options</div>
            <div>
                <div className='h4'>Book Type</div>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={bookTypeOptions}
                    onChange={handlechange}
                />
                <div className='h4 mt-2'>Departments</div>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={departments}
                    onChange={handlechange}
                />
                <div className='h4 mt-2'>Relevant Courses</div>
                <div className='ui input'>
                    <input value={course} type='text' placeholder='CSXXX' onChange={e => setcourse(e.target.value)}></input>
                </div>
                <button className='d-block ui button blue mt-2' onClick={onsubmit}>Apply</button>
            </div>
        </>
    );
};

export default connect()(Filter);