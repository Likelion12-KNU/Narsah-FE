import { useState } from 'react'
import { Link, useNavigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import "../style/SearchPage.css"
import leafImg from "../img/leaf.png"

function SearchPage() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?q=${query}`);
    };

    return (
        <div className='searchPage'>
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
            <div className='searchResult'>
                <div className='searchJO'>
                    <h1></h1>
                </div>
                <div className='searchJS'>

                </div>
                <div className='searchProfile'>

                </div>
            </div>
        </div>
    )
}

export default SearchPage;
