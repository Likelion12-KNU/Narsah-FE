import React from 'react';
import Bar from '../components/Bar';
import UserProfile from '../components/UserProfile';
import "../style/UserPage.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../components/userMenu/Menu';
import PasswordChange from '../components/userMenu/PasswordChange';
import NameChange from '../components/userMenu/NameChange';
import Pay from '../components/userMenu/Pay';
import Profile from '../components/userMenu/Profile';
import List from '../components/userMenu/List';
import Recent from '../components/userMenu/Recent';
import MyReviews from '../components/userMenu/MyReviews';
import MyPosts from '../components/userMenu/MyPosts';
import MyComments from '../components/userMenu/MyComments';
import ReceivedApp from '../components/userMenu/ReceivedApp';
import SentApp from '../components/userMenu/SentApp';
import ReceivedReviews from '../components/userMenu/ReceivedReviews';

// 추후 userprofile get 요청 추가

function UserPage() {
    let name = "홍길동";
    let userId = "gildong123";
    let code = 1;   // dummy

    return (
        <div className='userPage'>
            <Bar />
            <div className='content'>
                <div className='userContent'>
                <UserProfile name={name} userid={userId} code={code} />
                    <Routes>
                        <Route path='' element={<Menu code={code}/>}/>
                        <Route path='password' element={<PasswordChange />} />
                        <Route path='name' element={<NameChange />} />
                        <Route path='pay' element={<Pay />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='list' element={<List />} />
                        <Route path='recent' element={<Recent />} />
                        <Route path='myReview' element={<MyReviews />} />
                        <Route path='myPost' element={<MyPosts />} />
                        <Route path='myComments' element={<MyComments />} />
                        <Route path='receivedApp' element={<ReceivedApp />} />
                        <Route path='sentApp' element={<SentApp />} />
                        <Route path='receivedReview' element={<ReceivedReviews />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default UserPage;