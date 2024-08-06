import React from 'react';
import { Link, Routes, Route } from "react-router-dom"
import Bar from '../components/Bar';
import Login from '../components/Login_caregiver';
import "../style/LogInPage.css"
import Login_caregiver from '../components/Login_caregiver';
import Login_patient from '../components/Login_patient';
import LoginMenu from '../components/LoginMenu';


function LogInPage() {
    return (
        <div className='loginPage'>
            <Bar />
            <Routes>
                <Route path='' element={<LoginMenu />} />
                <Route path='/caregiver' element={<Login_caregiver />} />
                <Route path='/patient' element={<Login_patient />} />
            </Routes>

        </div>
    );
};

export default LogInPage;