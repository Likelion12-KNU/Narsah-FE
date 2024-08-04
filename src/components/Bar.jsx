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

    // const handleLogout = () => {
    //     // 로그아웃 로직 추가 (예: 인증 상태 해제, 로컬 스토리지에서 토큰 삭제 등)  // 아직 구현 안 함
    //     setIsLoggedIn(false);
    //     window.location.reload()
    // };

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