import React from 'react';
import { Link } from "react-router-dom";
import Bar from '../components/Bar';
import Signup from '../components/Signup';
import "../style/SignUpPage.css"

function SignUpPage() {
    return (
        <div className='signupPage'>
            <Bar />
            <div className='content'>
                <Signup />
            </div>
        </div>
    );
};

export default SignUpPage;