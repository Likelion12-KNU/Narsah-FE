import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Bar from '../components/Bar';
import "../style/JobOpeningPage.css"

function JobOpeningPage() {

  return (
    <div className='jobOpeningPage'>
      <Bar />
      <div className='content'>
        구인 게시판
      </div>
    </div>
  )
}

export default JobOpeningPage;
