import React from 'react';
import { Link } from "react-router-dom"
import Bar from '../components/Bar';
import "../style/SignUpPage.css"

function SignUpPage() {
    return (
        <div className='signupPage'>
            <Bar />
            <div className='content'>
                <form className='signupForm'>
                    <h1>SIGN UP</h1>
                    <input type='text' placeholder='ID'/>
                    <input type='password' placeholder='PASSWORD'/>
                    <button type='submit'>SIGN UP</button>
                    <br/><p>계정이 있으신가요? </p><Link to='/login'>로그인</Link>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;