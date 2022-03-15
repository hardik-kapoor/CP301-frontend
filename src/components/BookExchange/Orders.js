import React, { useEffect, useState } from 'react';
import Header from '../Header';
import flask from '../../apis/flask';
import { connect } from 'react-redux';
import BookRender from './BookRender';
import LoadingScreen from 'react-loading-screen';

const Orders = props => {
    const [books, setBooks] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const getFromFlask = async () => {
            const response = await flask.get('/orders', {
                params: {
                    user: props.userId
                }
            });
            setBooks(response.data);
            setShowLoading(false);
        }
        getFromFlask();
    }, [])

    const render = () => {
        if (books === [])
            return <div className='display-1 mx-auto'></div>
        else
            return <BookRender books={books} userId={props.userId} showButton2={false} />;
    };

    if (showLoading) {
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
            {render()}
        </>
    );
}

const mapStateToProps = state => {
    return { userId: state.auth.userId };
};

export default connect(mapStateToProps)(Orders);