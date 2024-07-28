import React from 'react';
import Bar from '../components/Bar';
import UserProfile from '../components/UserProfile';
import "../style/UserPage.css"

function UserPage() {
    return (
        <div className='userPage'>
            <Bar/>
            <div className='content'>
                <UserProfile name={"홍길동"} userid={"gildong123"} />
            </div>
            <div className='userMenu'>

            </div>
        </div>
    );
};

export default UserPage;