import React,{useEffect} from "react";
import {connect} from 'react-redux';

const GoogleAuth = () =>{
    const onAuthChange = isSignedIn =>{
        
    };

    useEffect(()=>{
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"270695080275-okoh6ktrsesop7jsaac6nvnj3h539a9t.apps.googleusercontent.com",
                scope:"email"
            }).then(()=>{
                auth=window.gapi.auth2.getAuthInstance();
                auth.isSignedIn.listen(onAuthChange);
            })
        })
    },[])
    return <></>;
};

export default connect(null)(GoogleAuth);