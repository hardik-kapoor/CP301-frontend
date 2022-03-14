import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../Header";
import flask from "../../apis/flask";

const BookDetails = props => {
    const [book,setbook]=useState({});
    useEffect(()=>{
        const getFromFlask = async () => {
            const response = await flask.get(props.location.pathname);
            console.log(response);
            setbook(response.data);
        }
        getFromFlask();
    },[]);

    const imgStyle={ maxWidth: '40vw', maxHeight: '70vh' , display:'block',marginLeft:'auto',marginRight:'auto'}

    return (<>
            <Header dropdown={true}/>
            <div className="ui two column grid">
                    <div className='six wide column'>
                        <div className='ui container'>
                            <img alt='' className="img-fluid rounded px-5 pt-5 pb-3" style={imgStyle} src={book.image_link} />
                        </div>
                    </div>
                    <div className="eight wide column">
                        <div className="ui header">
                            
                        </div>
                    </div>
            </div>
        </>);
};

export default connect(null)(withRouter(BookDetails));

// book_author: "kenneth h rosen"
// book_cost: "0"
// book_id: 6
// book_name: "Discrete Maths"
// book_type: "College_Course_Work"
// description: "good for discrete maths"
// image_link: "https://cp301storage.blob.core.windows.net/bookphotos/book_37_6.jpg"
// related_courses: [{…}]
// user_id: 37

// related_courses: Array(1)
// 0: {course_code: 'cs101', course_department: 'CSE', course_name: 'discrete maths'}
// length: 1
// [[Prototype]]: Array(0)