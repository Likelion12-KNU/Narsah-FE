import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../style/MainPage.css";
import leafImg from "../img/leaf.png";
import { baseUrl } from "../config/const"
import jobOpeningImg from "../img/job_opening.png";
import jobSearchImg from '../img/job_search.png';
import linkImg from "../img/link.png";

function MainPage() {
    const [query, setQuery] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태 변수
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log(document.cookie);
        fetch(`${baseUrl}/api/auth/check-session`,
            {
                method: "GET",
                credentials: 'include',
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } else {
                    throw new Error('Not logged in');
                }
            }).then(jsonData => {
                setUser(jsonData.email);
                setIsLoggedIn(true);
                console.log(jsonData);
            }).catch(error => {
                console.error("Fetch error: ", error);
            });
    } ,[]);

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?q=${query}`);
    };

    const handleLogout = () => {
        fetch(`${baseUrl}/api/auth/logout`,
            {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } else {
                    throw new Error('Not logged in');
                }
            }).then(jsonData => {
                setUser("");
                setIsLoggedIn(false);
            }).catch(error => {
                console.error("Fetch error: ", error);
            });
        window.location.reload()
    };

    return (
        <div className='mainPage'>
            <div className='yellow'>
                <div className='title'>
                    <img src={leafImg} alt="Leaf" />
                    <Link to="/">Nurspace</Link>
                </div>
                <div className='searchFrom'>
                    <p>Search for<br />Carers</p>
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='지역, 이름으로 검색하세요'
                        />
                        <button type='submit'>search</button>
                    </form>
                </div>
                <div className='nav'>
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
                <div className='orangeLine' />
                <div className='yellowLine' />
            </div>
            <div className='jobNav'>
                <Link className='jobElement' to="/jobOpening">
                    <img className='icon' src={jobOpeningImg} alt="Job Opening"/>
                    <p>간병인 구하기</p>
                    <img className='linkImg' src={linkImg} alt="Link"/>
                </Link>
                <Link className='jobElement' to="/jobSearch">
                    <img className='icon' src={jobSearchImg} alt="Job Search"/>
                    <p>환자 찾기</p>
                    <img className='linkImg' src={linkImg} alt="Link"/>
                </Link>
            </div>
        </div>
    );
}

export default MainPage;
