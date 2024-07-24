import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../style/MainPage.css";
import leafImg from "../img/leaf.png";
import jobOpeningImg from "../img/job_opening.png";
import jobSearchImg from '../img/job_search.png';
import linkImg from "../img/link.png";

function MainPage() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?q=${query}`);
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
                    <Link className='navElement' to="/login">
                        LOG IN
                    </Link>
                    <Link className='navElement' to="/signup">
                        SIGN UP
                    </Link>
                    <Link className='navElement' to="/user">
                        USER
                    </Link>
                </div>
                <div className='orangeLine' />
                <div className='yellowLine' />
            </div>
            <div className='jobNav'>
                <Link className='jobElement' to="/jobOpening">
                    <img className='icon' src={jobOpeningImg} />
                    <p>구인</p>
                    <img className='linkImg' src={linkImg} />
                </Link>
                <Link className='jobElement' to="/jobSearch">
                    <img className='icon' src={jobSearchImg} />
                    <p>구직</p>
                    <img className='linkImg' src={linkImg} />
                </Link>
            </div>
        </div>
    );
}

export default MainPage;
