import React, { useEffect, useState, useRef } from 'react';
import GoogleAuth from '../GoogleAuth';
import { Link } from 'react-router-dom';

const SearchHeader = props => {
    const [openDropdown, setOpenDropdown] = useState(0);
    const ref = useRef();
    useEffect(() => {
        const closeDropdown = event => {
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
    return (
        <>
            <div className='ui large primary inverted menu' style={{ margin: '2px', marginTop: '0px' }}>
                <Link to='/' className='active item'>Home</Link>
                <div className='ui dropdown item' onClick={() => setOpenDropdown(1-openDropdown)} ref={ref}>
                    <div className='text'>Nav</div>
                    <i className="dropdown icon"></i>
                    <div className={`menu transition ${openDropdown === 1 ? 'visible' : ''}`}>
                        <Link to="/" className='item'>
                            Home
                        </Link>
                        <div className='item'>
                            Complaint Portal
                        </div>
                        <div className='item'>
                            Book Exchange
                        </div>
                        <div className='item'>
                            Course Discussion Portal
                        </div>
                    </div>
                </div>
                <div className='right item'>
                    <GoogleAuth />
                </div>
            </div>
        </>
    );
};

export default SearchHeader;