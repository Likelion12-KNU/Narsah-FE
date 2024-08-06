import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/SignupMenu.css"
import patientImg from "../img/patient.png"
import caregiverImg from "../img/caregiver.png"

function SignupMenu() {
    const navigate = useNavigate();

    return (
        <div className='signupMenu'>
            <div className='select' onClick={() => navigate("/signup/patient")}>
                <img src={patientImg}/>
                <p>환자 회원가입</p>
            </div>
            <div className='select' onClick={() => navigate("/signup/caregiver")}>
                <img src={caregiverImg}/>
                <p>간병인 회원가입</p>
            </div>
        </div>
    );
};

export default SignupMenu;