import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Bar from '../components/Bar';
import "../style/JobSearchPage.css"
import userOrange from '../img/user_orange.png';
import buildingOrange from '../img/building_orange.png';

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
