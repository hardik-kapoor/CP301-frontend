import React from 'react';
import LendBookCard from './LendBookCard';

const LendBookRender = props =>{
    // console.log(props);
    if(!props.books){
        return null;
    }
    return (
        <div className="row">
            {props.books.map(book => {
                return (
                    <div className="col-sm-6" key={book.book_id}>
                        <LendBookCard imgSource={book.image_link}
                            bookTitle={book.book_name}
                            authorName={book.book_author}
                            description={book.description}
                            id={book.book_id}
                            cost={book.book_cost}
                            userId={props.userId}
                            Orders={book.Orders}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default LendBookRender;