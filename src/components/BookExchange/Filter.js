import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { departments } from '../../objects';
import history from '../../history';

const animatedComponents = makeAnimated();

const bookTypeOptions = [
    { value: 'College_Course_Work', label: 'College Course Work' },
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Non_College', label: 'Non College work' },
    { value: 'other', label: 'Other' }
];

class Filter extends Component {
    state = { course: '', dept: [], type: [] };

    onSubmit = () => {
        const put = {};
        put.course = this.state.course;
        put.dept = [];
        put.type = [];
        this.state.dept.map(obj => put.dept.push(obj.value));
        this.state.type.map(obj => put.type.push(obj.value));
        const params = new URLSearchParams(put);
        const str='/bookexchange?'+params.toString();
        console.log(str);
        history.push(str);
        window.location.reload(true);
    };


    render() {
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
                        onChange={e => this.setState({ type: e })}
                    />
                    <div className='h4 mt-2'>Departments</div>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={departments}
                        onChange={e => this.setState({ dept: e })}
                    />
                    <div className='h4 mt-2'>Relevant Courses</div>
                    <div className='ui input'>
                        <input value={this.state.course} type='text' placeholder='CSXXX' onChange={e => this.setState({ course: e.target.value })}></input>
                    </div>
                    <button className='d-block ui button blue mt-2' onClick={this.onSubmit}>Apply</button>
                </div>
            </>
        );
    }
};

// const Filter = props => {
//     // state = { course: '', dept: [], type: [] };
//     const [course, setCourse] = useState('');
//     const [dept, setDept] = useState([]);
//     const [type, setType] = useState([]);

//     // onSubmit = () => {
//     //     const put = {};
//     //     put.course = state.course;
//     //     put.dept = [];
//     //     put.type = [];
//     //     state.dept.map(obj => put.dept.push(obj.value));
//     //     state.type.map(obj => put.type.push(obj.value));
//     //     const params = new URLSearchParams(put);
//     //     const str = '/bookexchange?' + params.toString();
//     //     console.log(str);
//     //     history.push(str);
//     // };


//     return (
//         <>
//             <div className='h2 text-center'>Filter Options</div>
//             <div>
//                 <div className='h4'>Book Type</div>
//                 <Select
//                     closeMenuOnSelect={false}
//                     components={animatedComponents}
//                     isMulti
//                     options={bookTypeOptions}
//                     onChange={e => console.log(e)}
//                 />
//                 <div className='h4 mt-2'>Departments</div>
//                 <Select
//                     closeMenuOnSelect={false}
//                     components={animatedComponents}
//                     isMulti
//                     options={departments}
//                     onChange={e => console.log(e)}
//                 />
//                 <div className='h4 mt-2'>Relevant Courses</div>
//                 <div className='ui input'>
//                     <input  type='text' placeholder='CSXXX' onChange={e => console.log(e)}></input>
//                 </div>
//                 <button className='d-block ui button blue mt-2' >Apply</button>
//             </div>
//         </>
//     );
// };

export default connect()(Filter);