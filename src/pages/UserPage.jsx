import React, { useEffect, useState } from 'react';
import Bar from '../components/Bar';
import UserProfile from '../components/UserProfile';
import "../style/UserPage.css";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

function UserPage() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user?id=1`);
                if (response.data.length > 0) {
                    setUser(response.data[0]);
                }
                else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Failed to get user data:", error.response ? error.response.data : error.message);
                alert("로그인 후 이용하세요.");
                navigate("/login");
            }
        };
        fetchUser();
    }, [navigate]);

    if (user == null) {
        return <div>Loading...</div>; // 또는 로딩 스피너를 반환
    }

    return (
        <div className='userPage'>
            <Bar />
            <div className='content'>
                <div className='userContent'>
                    <UserProfile name={user.name} userid={user.userId} code={user.code} />
                    <Routes>
                        <Route path='' element={<Menu code={user.code} />} />
                        <Route path='password' element={<PasswordChange id={user.id}/>} />
                        <Route path='name' element={<NameChange />} />
                        <Route path='pay' element={<Pay />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='list' element={<List user={user}/>} />
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
}

export default UserPage;
