import { useState } from 'react'
import { Link, useNavigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Bar from '../components/Bar';
import Search from '../components/Search';
import "../style/SearchPage.css"

function SearchPage() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?q=${query}`);
    };

    return (
        <div className='searchPage'>
            <Bar />
            <div className='content'>
                <div className='header'>
                    <h1>검색</h1>
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
                <Search />
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
