import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import profileImg from "../img/profile.png";
import userOrange from '../img/user_orange.png';
import "../style/UserProfile.css"

// code : 일반 유저 -> 0, 간병인 -> 1
function UserProfile({name, userid, code}) {

    return (
        <div className="profile">
            <div className="userHeader">
                <img src={userOrange} alt="user" className="userIcon" />
                <div className="userInfo">
                    {code === 0 ? (
                        <h2><strong>{name}</strong> 님</h2>
                    ) : (
                        <h2>간병사 <strong>{name}</strong> 님</h2>
                    )}
                    
                    <p>{userid}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;