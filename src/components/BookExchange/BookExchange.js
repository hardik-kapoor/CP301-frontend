import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from "../Header";
import LoadingScreen from 'react-loading-screen';
import flask from "../../apis/flask";
import BookRender from "./BookRender";
import Filter from "./Filter";

class BookExchange extends React.Component {
    state = { books: [], showLoadingScreen: true, temp: Math.random() };
    componentDidMount() {
        const getFromFlask = async () => {
            const response = await flask.get(this.props.location.pathname+this.props.location.search);
            this.setState({ books: response.data, showLoadingScreen: false });
        }
        getFromFlask();
    }

    rerender = () => {
        window.location.reload(true);
    }

    render() {
        if (this.state.showLoadingScreen) {
            return (
                <>
                    <LoadingScreen loading={true} bgColor='#f1f1f1' spinnerColor='#9ee5f8' textColor='#676767'
                        text='Loading...'>
                        <></>
                    </LoadingScreen>
                </>
            );
        }
        return (
            <>
                <Header dropdown={true} />
                <div className="ui two column grid" style={{ margin: '0px' }}>
                    <div className="four wide column">
                        <Filter />
                    </div>
                    <div className="twelve wide column">
                        <BookRender books={this.state.books} userId={this.props.userId} rerender={this.rerender} showButton2={true}/>
                    </div>
                </div>
            </>
        );
    }
};

const mapStateToProps = state => {
    return { userId: state.auth.userId };
};

export default connect(mapStateToProps)(withRouter(BookExchange));

// book_cost: "0"
// book_id: 6
// book_name: "Discrete Maths"
// book_type: "College_Course_Work"
// description: "good for discrete maths"
// image_link: "https://cp301storage.blob.core.windows.net/bookphotos/book_37_6.jpg"
// related_courses: [{…}]
// user_id: 37