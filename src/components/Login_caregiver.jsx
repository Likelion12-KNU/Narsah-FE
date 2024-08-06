import { useState } from 'react'
import axios from 'axios';
import { json, Link, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import { baseUrl } from '../config/const';
import "../style/Login.css";

// dummy
import { tUser } from '../config/tmpUser'

const Login_caregiver = () => {
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navi = useNavigate();

    // 더미 데이터(tUser) 사용. BE와 연동시 수정
    const handleConfirm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/api/auth/caregiver/login`, {
                account: userid,
                password: password
            }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            });

            if (response.status === 200) {
                console.log("login successful");
                console.log(response);
                const jsonData = response.data;
                console.log(jsonData);
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error("Axios error: ", error);
        }
        // main으로 이동
        navi('/');
        window.location.reload()    // reload

    }


    return (
        <div className='content'>
            <form className='loginForm'>
                <h1>간병인 로그인</h1>
                <input
                    type='text'
                    placeholder='ID'
                    value={userid}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='PASSWORD'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    onClick={handleConfirm}
                >LOG IN</button>
                <br /><p>계정이 없으신가요? </p><Link to='/signup'>회원가입</Link>
            </form>
        </div>
    )
}

export default Login_caregiver;