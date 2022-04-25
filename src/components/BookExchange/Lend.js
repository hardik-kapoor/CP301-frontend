import React, { useEffect, useState } from 'react';
import Header from '../Header';
import flask from '../../apis/flask';
import { connect } from 'react-redux';
import LoadingScreen from 'react-loading-screen';
import LendBookRender from './LendBookRender';

const Lend = props => {
    const [books, setBooks] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const getFromFlask = async () => {
            const response = await flask.get('/lenders', {
                params: {
                    user: props.userId
                }
            });
            console.log(response.data);
            setBooks(response.data);
            setShowLoading(false);
        }
        getFromFlask();
    }, [])

    const render = () => {
        if (books === [])
            return <div className='display-1 mx-auto'></div>
        else
            return <LendBookRender books={books} 
                               userId={props.userId} 
                               showButton2={false} 
                    />;
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
};

const mapStateToProps = state => {
    return { userId: state.auth.userId };
};

export default connect(mapStateToProps)(Lend);