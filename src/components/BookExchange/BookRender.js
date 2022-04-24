import React from 'react';
import BookCard from './BookCard';

const BookRender = props =>{
    console.log(props);
    if(!props.books){
        return null;
    }
    return (
        <div className="row">
            {props.books.map(book => {
                const showButtons = (props.userId === book.user_id) ? true : false;
                return (
                    <div className="col-sm-6" key={book.book_id}>
                        <BookCard imgSource={book.image_link}
                            bookTitle={book.book_name}
                            authorName={book.book_author}
                            description={book.description}
                            id={book.book_id}
                            cost={book.book_cost}
                            userId={props.userId}
                            showButton={showButtons}
                            funButton={props.funButton}
                            showButton2={props.showButton2}
                            funButton2={props.funButton2}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BookRender;