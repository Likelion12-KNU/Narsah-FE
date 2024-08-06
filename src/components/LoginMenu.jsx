import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/SignupMenu.css"
import patientImg from "../img/patient.png"
import caregiverImg from "../img/caregiver.png"

function LoginMenu() {
    const navigate = useNavigate();

    return (
        <div className='content'>
            <div className='signupMenu'>
                <div className='select' onClick={() => navigate("/login/patient")}>
                    <img src={patientImg} />
                    <p>환자 로그인</p>
                </div>
                <div className='select' onClick={() => navigate("/login/caregiver")}>
                    <img src={caregiverImg} />
                    <p>간병인 로그인</p>
                </div>
            </div>
        </div>
    );
};

export default LoginMenu;