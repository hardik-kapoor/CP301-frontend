import React,{ useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';

const Header = props => {
    const [openDropdown, setOpenDropdown] = useState(0);
    const ref = useRef();
    const currentURL=window.location.pathname;
    useEffect(() => {
        const closeDropdown = event => {
            if (ref&&ref.current&&ref.current!==null&&ref.current.contains(event.target)) {
                return;
            }
            setOpenDropdown(0);
        };
        document.body.addEventListener('click', closeDropdown);
        return () => {
            document.body.removeEventListener('click', closeDropdown);
        };
    }, []);
    const renderButtons = () => {
        if (props.isSignedIn)
            return <SignOut />;
        else {
            return (
                <>
                    <Link to='/signup' className="ui inverted button" style={{ marginRight: '5px' }}>Sign Up</Link>
                    <Link to='/login' className="ui inverted button" style={{ marginRight: '5px' }}>Log In</Link>
                </>
            );
        }
    };

    const renderHeader = () => {
        if(props.dropdown===true){
            return (
            <>            
                <Link to='/bookexchange' className={`${currentURL==='/bookexchange'?'active':''} item`}>Book Exchange</Link>
                <div className='ui dropdown item' onClick={() => setOpenDropdown(1-openDropdown)} ref={ref}>
                    <div className='text'>Navigation</div>
                    <i className="dropdown icon"></i>
                    <div className={`menu transition ${openDropdown ? 'visible' : ''}`}>
                        <Link to={`${currentURL}/newbook`} className='item'>
                            Sell new Book
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
            </>);
        }
        else{
            return (
                <>
                    <Link to='/bookexchange' className={`${currentURL==='/bookexchange'?'active':''} item`}>Book Exchange</Link>
                </>
            );
        }
    }

    return (
        <div className='ui container'>
            <div className='ui large primary inverted menu'>
                <Link to='/' className={`${currentURL==='/'?'active':''} item`}>Home</Link>
                {renderHeader()}
                <div className='right item'>
                    {/* <GoogleAuth /> */}
                    {renderButtons()}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { ...state.auth }
};

export default connect(mapStateToProps)(Header);