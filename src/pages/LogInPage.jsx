import React from 'react';
import { Link } from "react-router-dom"
import Bar from '../components/Bar';
import "../style/LogInPage.css"

function LogInPage() {
    return (
        <div className='loginPage'>
            <Bar />
            <div className='loginContent'>
                <form className='loginForm'>
                    <h1>LOG IN</h1>
                    <input type='text' placeholder='ID'/>
                    <input type='password' placeholder='PASSWORD'/>
                    <button type='submit'>LOG IN</button>
                    <br/><p>계정이 없으신가요? </p><Link to='/signup'>회원가입</Link>
                </form>
            </div>
        </div>
    );
};

export default LogInPage;