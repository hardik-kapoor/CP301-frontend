import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions';

const SignOut = props => {
    console.log(props);
    return <button onClick={() => props.signOut()} className='ui inverted button'>Log Out</button>
};

export default connect(null, { signOut })(SignOut);