import React, { useEffect, useState, useRef } from 'react';
// import GoogleAuth from '../GoogleAuth';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import SignOut from '../SignOut';

const SearchHeader = props => {
    const [openDropdown, setOpenDropdown] = useState(0);
    const ref = useRef();
    useEffect(() => {
        const closeDropdown = event => {
            if(!ref.current)
                return;
            if (ref.current.contains(event.target)){
                return;
            }
            setOpenDropdown(0);
        };
        document.body.addEventListener('click', closeDropdown);
        return () => {
            document.body.removeEventListener('click', closeDropdown);
        };
    }, []);

    const renderButtons = ()=>{
        if(props.isSignedIn)
            return <SignOut />;
        else
        {
            return (
                <>
                    <Link to='/signup' className="ui inverted button" style={{marginRight:'5px'}}>Sign Up</Link>
                    <Link to='/login' className="ui inverted button" style={{marginRight:'5px'}}>Log In</Link>
                </>
            );
        }
    };

    return (
        <div className='ui container'>
            <div className='ui large primary inverted menu' style={{ margin: '2px', marginTop: '0px' }}>
                <Link to='/' className='item'>Home</Link>
                <div className='ui dropdown item' onClick={() => setOpenDropdown(1-openDropdown)} ref={ref}>
                    <div className='text'>Navigation</div>
                    <i className="dropdown icon"></i>
                    <div className={`menu transition ${openDropdown ? 'visible' : ''}`}>
                        <Link to="/" className='item'>
                            Home
                        </Link>
                        <Link to='/' className='item'>
                            Complaint Portal
                        </Link>
                        <Link to='/bookexchange' className='item'>
                            Book Exchange
                        </Link>
                        <Link  to='/' className='item'>
                            Course Discussion Portal
                        </Link>
                    </div>
                </div>
                <div className='right item'>
                    {renderButtons()} 
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state=>{
    return {...state.auth}
};


export default connect(mapStateToProps)(SearchHeader);