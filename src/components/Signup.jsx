import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// dummy
import { tUser } from '../config/tmpUser';

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    // 더미 데이터(tUser) 사용. BE와 연동시 수정
    const handleConfirm = (e) => {
        // if (정보를 적절하게 입력했다면) {
        //     alert("회원가입이 완료되었습니다.");
        //     // login으로 이동
        // } else {
        //     alert("ID를/PW를 올바르게 입력해 주십시오.")
        // }
    }

    return (
        <div className='content'>
            <form className='signupForm'>
                <h1>SIGN UP</h1>
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
                >SIGN UP</button>
                
                <br /><p>계정이 있으신가요? </p><Link to='/login'>로그인</Link>
            </form>
        </div>
    )
}

export default Signup;
