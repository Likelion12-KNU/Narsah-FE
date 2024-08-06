import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { baseUrl } from '../config/const';
import "../style/Signup.css";

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const navi = useNavigate();

    const handleConfirm = async (e) => {
        e.preventDefault();

        if (id !== '' && password !== '' && password === passwordConfirm && name != '') {
            const caregiverData = {
                account: id,
                password: password,
                passwordConfirm: passwordConfirm,
                name: name
            };

            const formData = new FormData();
            const json = JSON.stringify(caregiverData);
            const blob = new Blob([json], { type: 'application/json' });
            formData.append('caregiver', blob);
            if (profileImage) {
                formData.append('profileImage', profileImage);
            }

            try {
                const response = await fetch(`${baseUrl}/api/auth/caregiver/register`, {
                    method: "POST",
                    body: formData,
                    credentials: 'include' // Include cookies and other credentials
                });

                if (response.ok) {
                    navi("/login");
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.log(error);
                alert('회원가입 중 오류가 발생했습니다.');
            }

        } else if (id === '' || password === '') {
            alert("ID와 PASSWORD를 올바르게 입력해 주십시오.");
        } else if (name == '') { 
            alert("이름은 필수 입력사항 입니다.");
        } else {
            alert("비밀번호와 비밀번호 확인이 다릅니다.");
        }
    }

    return (
        <form className='signupForm' onSubmit={handleConfirm}>
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
            <input
                type='text'
                placeholder='NAME'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='file'
                accept='image/*'
                onChange={(e) => setProfileImage(e.target.files[0])}
            />
            <button type='submit'>SIGN UP</button>
            <br /><p>계정이 있으신가요? </p><Link to='/login'>로그인</Link>
        </form>
    );
}

export default Signup;
