import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Bar from '../components/Bar';
import Signup from '../components/Signup_caregiver';
import "../style/SignUpPage.css"
import SignupMenu from '../components/SignupMenu';
import Signup_caregiver from '../components/Signup_caregiver';
import Signup_patient from '../components/Signup_patient';

function SignUpPage() {
    return (
        <div className='signupPage'>
            <Bar />
            <div className='content'>
                <Routes>
                    <Route path='' element={<SignupMenu/>}/>
                    <Route path='/caregiver' element={<Signup_caregiver/>}/>
                    <Route path='/patient' element={<Signup_patient/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default SignUpPage;