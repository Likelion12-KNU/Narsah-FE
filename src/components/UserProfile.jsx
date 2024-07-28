import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import profileImg from "../img/profile.png";
import userOrange from '../img/user_orange.png';
import linkImg from "../img/link.png";

// code : 일반 유저 -> 0, 간병인 -> 1
function UserProfile({name, userid, code}) {

    return (
        <div className="profile">
            <div className="userHeader">
                <img src={userOrange} alt="user" className="userIcon" />
                <div className="userInfo">
                    <h2>{name} 님</h2>
                    <p>{userid}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;