import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes, useNavigate} from 'react-router-dom'
import { baseUrl } from '../config/const';
import "../style/Signup.css"

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const navi = useNavigate();

    const handleConfirm = (e) => {
        e.preventDefault();        

        if (id !== '' && password !== '' && password === passwordConfirm) {
            fetch(`${baseUrl}/api/auth/register`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: id,
                        password: password,
                        passwordConfirm: passwordConfirm
                    })
                }
            ).then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            }).then(jsonData => {
                console.log(jsonData);
                navi("/login");
            }).catch(error => {
                console.log(error)
            });

        } else if (id == '' || password == ''){
            alert("ID를/PW를 올바르게 입력해 주십시오.")
        } else {
            alert("비밀번호와 비밀번호 확인이 다릅니다.")
        }
    }

    return (
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
            <input
                type='password'
                placeholder='PASSWORD CONFIRM'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button
                type='submit'
                onClick={handleConfirm}
            >SIGN UP</button>

            <br /><p>계정이 있으신가요? </p><Link to='/login'>로그인</Link>
        </form>
    )
}

export default Signup;
