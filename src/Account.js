import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import flask from "./apis/flask";
import CreateAccountDetails from './components/CreateAccountDetails';

const Account = props => {
    const [isId,setisId]=useState(null);
    const [data,setdata]=useState({});
    useEffect(() => {
        const getFromFlask = async () => {
            const response = await flask.get('/accounts', {
                params: {
                    user_id: props.userId
                }
            });
            if(response.data==='none'){
                setisId(false);
            }
            else{
                setisId(true);
                setdata(response.data);
            }
            console.log(response.data);
        };

        getFromFlask();
    }, [isId])

    const retData = () =>{
        if(isId===null)
            return <p>Null</p>;
        else if(isId===false)
            return <CreateAccountDetails />;
        else
            return <p>True</p>;
    };

    return (
        <>
            <Header />
            {retData()};
        </>
    );
};

const mapStateToProps = state => {
    return { ...state.auth };
};

export default connect(mapStateToProps)(Account)