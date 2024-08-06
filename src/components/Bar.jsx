import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { baseUrl } from "../config/const";
import leafOrangeImg from "../img/leaf_orange.png";
import "../style/Bar.css";

function Bar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태 변수
    const [user, setUser] = useState("");

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        fetch(`${baseUrl}/api/user/me`,
            // fetch(`${baseUrl}/LoggedIn`,
            {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                if (response.status === 200) {
                    console.log(response);
                    setIsLoggedIn(true);
                } else {
                    throw new Error('Not logged in');
                }
            }).catch(error => {
                console.error("Fetch error: ", error);
            });
    }, []);

    const handleLogout = () => {
        fetch(`${baseUrl}/api/user/logout`,
            {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                if (response.ok) {
                    console.log(response);
                    setUser("");
                    setIsLoggedIn(false);
                } else {
                    throw new Error('Not logged in');
                }
            }).catch(error => {
                console.error("Fetch error: ", error);
            });
        window.location.reload()
    };

    return (
        <div className='navBar'>
            <Link className='titleCover' to="/">
                <img src={leafOrangeImg} />
                <p>Nurspace</p>
            </Link>


            <button className='barButton' onClick={toggleMenu} />
            <div className={`nav ${menuVisible ? 'visible' : ''}`}>
                {isLoggedIn ? (
                    <>
                        <button className='navElement' onClick={handleLogout}>
                            LOG OUT
                        </button>
                        <Link className='navElement' to="/user">
                            USER
                        </Link>
                    </>
                ) : (
                    <>
                        <Link className='navElement' to="/login">
                            LOG IN
                        </Link>
                        <Link className='navElement' to="/signup">
                            SIGN UP
                        </Link>
                        <Link className='navElement' to="/user">
                            USER
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Bar;