import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Bar from '../components/Bar';
import "../style/JobSearchPage.css"

function JobSearchPage() {

  return (
    <div className='jobSearchPage'>
      <Bar/>
      <div className='content'>
        구직 게시판
      </div>
    </div>
  )
}

export default JobSearchPage;
