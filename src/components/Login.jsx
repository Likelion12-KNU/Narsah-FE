import { useState } from 'react'
import { json, Link, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import { baseUrl } from '../config/const';

// dummy
import { tUser } from '../config/tmpUser'

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navi = useNavigate();

    // 더미 데이터(tUser) 사용. BE와 연동시 수정
    const handleConfirm = (e) => {
        e.preventDefault();
        fetch(`${baseUrl}/api/auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: id,
                    password: password
                })
            }).then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            }).then(jsonData => {
                console.log(jsonData);
            }).catch(error => {
                console.error("Fetch error: ", error);
            });

        // main으로 이동
        navi('/');
        window.location.reload()    // reload
        
    }


    return (
        <div className='content'>
            <form className='loginForm'>
                <h1>LOG IN</h1>
                <input
                    type='text'
                    placeholder='ID'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
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

export default Login;