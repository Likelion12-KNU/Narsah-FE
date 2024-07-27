import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'

// dummy
import { tUser } from '../config/tmpUser'

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navi = useNavigate();

    // 더미 데이터(tUser) 사용. BE와 연동시 수정
    const handleConfirm = (e) => {
        e.preventDefault();
        if (id === tUser.id && password === tUser.password) {
            alert("로그인에 성공했습니다.");
            // user profile 또는 main으로 이동
            navi('/');
        } else {
            alert("ID 또는 PASSWORD가 잘못되었습니다.")
            window.location.reload()    // reload
        }
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
                <br/><p>계정이 없으신가요? </p><Link to='/signup'>회원가입</Link>
            </form>
        </div>
    )
}

export default Login;