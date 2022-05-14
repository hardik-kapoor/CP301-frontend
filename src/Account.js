import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import flask from "./apis/flask";
import CreateAccountDetails from './components/CreateAccountDetails';
import { accountType } from './actions';

const Account = props => {
    const [isId, setisId] = useState(null);
    const [data, setdata] = useState({});
    useEffect(() => {
        const getFromFlask = async () => {
            const response = await flask.get('/accounts', {
                params: {
                    user_id: props.userId
                }
            });
            if (response.data === 'none') {
                setisId(false);
            }
            else {
                setisId(true);
                setdata(response.data);
                console.log(data);
            }
            await props.accountType(props.userId);
        };

        getFromFlask();
    }, [isId])

    const retData = () => {
        if (isId === null)
            return <p>Null</p>;
            // return <CreateAccountDetails />;
        else if (isId === false)
            return <CreateAccountDetails />;
        else
            return <p>True</p>;
    };

    return (
        <div className="account">
            <Header />
            {retData()};
        </div>
    );
};

const mapStateToProps = state => {
    return { ...state.auth };
};

export default connect(mapStateToProps, { accountType })(Account)