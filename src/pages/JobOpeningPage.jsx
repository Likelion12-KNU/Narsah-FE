import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Bar from '../components/Bar';
import "../style/JobOpeningPage.css"
import PostList from '../components/PostList';
import jobOpeningImg from "../img/job_opening.png"

function JobOpeningPage() {

  return (
    <div className='jobOpeningPage'>
      <Bar />
      <div className='content'>
        <div className='board'>
          <img src={jobOpeningImg}/>
          <h1>간병인 구해요</h1>
        </div>
        <PostList/>
      </div>
    </div>
  )
}

export default JobOpeningPage;
