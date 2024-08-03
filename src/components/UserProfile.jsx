import { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import profileImg from "../img/profile.png";
import userOrange from '../img/user_orange.png';
import { baseUrl } from '../config/const';
import "../style/UserProfile.css"
import { Navigate } from 'react-router-dom';

// code : 일반 유저 -> 0, 간병인 -> 1
function UserProfile({name, userid, code}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태 변수
    const [user, setUser] = useState("");

    // useEffect(() => {
    //     fetch(`${baseUrl}/api/auth/check-session`,
    //         {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" }
    //         }).then(response => {
    //             if (response.ok) {
    //                 console.log(response);
    //                 return response.json();
    //             } else {
    //                 throw new Error('Not logged in');
    //             }
    //         }).then(jsonData => {
    //             setUser(jsonData.email);
    //             setIsLoggedIn(true);
    //             console.log(jsonData);
    //         }).catch(error => {
    //             console.error("Fetch error: ", error);
    //         });
    // }, []);

    // if (!isLoggedIn) {
    //     return <div>로그인해주세요</div>;
    // }

    return (
        <div className="profile">
            <div className="userHeader">
                <img src={userOrange} alt="user" className="userIcon" />
                <div className="userInfo">
                    {
                        code === 0 ? (
                            <h2><strong>{name}</strong> 님</h2>
                        ) : (
                            <h2>간병사 <strong>{name}</strong> 님</h2>
                        )
                    }
                    
                    <p>{userid}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;