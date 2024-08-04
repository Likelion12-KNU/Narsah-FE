import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Bar from '../components/Bar';
import Filter from '../components/Filter';
import "../style/JobSearchPage.css";
import PostList from '../components/PostList';
import jobSearchImg from "../img/job_search.png";
import writeImg from "../img/pencil.png";

function JobSearchPage() {
    return (
        <div className='jobSearchPage'>
            <Bar />
            <div className='content'>
                <div className='board'>
                    <img src={jobSearchImg} alt="Job Search"/>
                    <h1>환자 찾기</h1>
                </div>
                <Filter/>
            </div>
            <Link to='/jobOpening/newPost'>
                <img src={writeImg} alt="New Post"/>
            </Link>
            <div className='content'>
                {/* <Filter /> */}
            </div>
        </div>
    );
}

export default JobSearchPage;
