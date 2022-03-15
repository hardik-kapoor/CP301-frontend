import React from 'react';
import Header from '../Header';

const Orders = props =>{
    return (
        <>
            <Header dropdown={true} />
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        Hello
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;