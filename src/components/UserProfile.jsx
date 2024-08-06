import { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import profileImg from "../img/profile.png";
import userOrange from '../img/user_orange.png';
import { baseUrl } from '../config/const';
import "../style/UserProfile.css"

// code : 일반 유저 -> 0, 간병인 -> 1
function UserProfile({user}) {

    return (
        <div className="profile">
            <div className="userHeader">
                <img src={userOrange} alt="user" className="userIcon" />
                <div className="userInfo">
                    {
                        user.code == 0 ? (
                            <h2><strong>{user.name}</strong> 님</h2>
                        ) : (
                            <h2>간병인 <strong>{user.name}</strong> 님</h2>
                        )
                    }
                    
                    <p>{user.account}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;