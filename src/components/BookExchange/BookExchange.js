import React from "react";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Header from "../Header";
import LoadingScreen from 'react-loading-screen';
import BookCard from "./BookCard";
import flask from "../../apis/flask";

class BookExchange extends React.Component {
    state = { books: [], showLoadingScreen: true };
    // const [books, setBooks] = useState([]);
    componentDidMount() {
        const getFromFlask = async () => {
            const response = await flask.get(this.props.location.pathname);
            this.setState({ books: response.data, showLoadingScreen: false });
        }
        getFromFlask();
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
                    <div className="three wide column">
                        Hello
                    </div>
                    <div className="thirteen wide column">
                        {/* <div className="ui four column grid" style={{ paddingRight: '10px', paddingTop: '10px' }}> */}
                            {this.state.books.map(book => {
                                return (
                                    <Link to={`/bookexchange/${book.book_id}`} style={{ textDecoration: 'none' }} key={book.book_id}>
                                        <BookCard imgSource={book.image_link}
                                            bookTitle={book.book_name}
                                            authorName={book.book_author}
                                            description={book.description}
                                            cost={book.book_cost}
                                            key={book.book_id} />
                                    </Link>);
                            })}
                        {/* </div> */}
                    </div>
                </div>
            </>
        );
    }
};

export default connect(null)(withRouter(BookExchange));

// book_cost: "0"
// book_id: 6
// book_name: "Discrete Maths"
// book_type: "College_Course_Work"
// description: "good for discrete maths"
// image_link: "https://cp301storage.blob.core.windows.net/bookphotos/book_37_6.jpg"
// related_courses: [{…}]
// user_id: 37