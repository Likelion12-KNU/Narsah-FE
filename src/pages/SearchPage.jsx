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
                </div>
                <Search />
            </div>
        </div>
    )
}

export default SearchPage;
