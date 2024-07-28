import React from 'react';
import { Link } from "react-router-dom"
import Bar from '../components/Bar';
import Login from '../components/Login';
import "../style/LogInPage.css"

function LogInPage() {
    return (
        <div className='loginPage'>
            <Bar />
            <Login />
        </div>
    );
};

export default LogInPage;