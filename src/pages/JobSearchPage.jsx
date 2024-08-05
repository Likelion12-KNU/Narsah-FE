import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Bar from '../components/Bar';
import "../style/JobSearchPage.css";
import jobSearchImg from "../img/job_search.png";
import writeImg from "../img/pencil.png";
import PostListSearch from '../components/PostListSearch';

function JobSearchPage() {
    return (
        <div className='jobSearchPage'>
            <Bar />
            <div className='content'>
                <div className='board'>
                    <img src={jobSearchImg} alt="Job Search"/>
                    <h1>환자 찾기</h1>
                </div>
                <PostListSearch query={""}/>
            </div>
            <Link to='/jobOpening/newPost'>
                <img src={writeImg} alt="New Post"/>
            </Link>
        </div>
    );
}

export default JobSearchPage;
