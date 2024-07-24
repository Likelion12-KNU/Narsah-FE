import React from 'react';
import Bar from '../components/Bar';
import "../style/UserPage.css"

function UserPage() {
    return (
        <div className='userPage'>
            <Bar/>
            <div className='content'>
                사용자
            </div>
        </div>
    );
};

export default UserPage;