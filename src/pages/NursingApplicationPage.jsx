import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Bar from '../components/Bar';
import { baseUrl } from '../config/const';
import profileImg from "../img/profile.png";
import "../style/NursingApplicationPage.css"

/**
 * 문자열 형태의 기간을 받아 두 날짜 사이의 일수를 계산하는 함수
 * @param {string} period - "YYYY.MM.DD 부터 YYYY.MM.DD 까지" 형식의 문자열
 * @returns {number} - 두 날짜 사이의 일수
 */
function calculateDays(period) {
    const [startStr, endStr] = period.split(' 부터 ').map(part => part.split(' 까지')[0]);

    const startDate = new Date(startStr);
    const endDate = new Date(endStr);

    // 두 날짜 사이의 차이를 밀리초 단위로 계산
    const timeDiff = endDate - startDate;

    // 밀리초를 일수로 변환
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    return daysDiff;
}

function NursingApplicationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const appState = location.state || {}; // 전달된 state를 받습니다.

    const [pay, setPay] = useState('');
    const [totalPay, setTotalPay] = useState('');

    const handleTotalPay = (event) => {
        const value = event.target.value;
        if (value === '') {
            setPay('');
            setTotalPay('');
        } else if (!isNaN(value) && value > 0) {
            const days = calculateDays(appState.period);
            setPay(Math.floor(value));
            setTotalPay(Math.floor(value * days));
        }
    };

    const handlePay = (event) => {
        const value = event.target.value;
        if (value === '') {
            setPay('');
            setTotalPay('');
        } else if (!isNaN(value) && value > 0) {
            const days = calculateDays(appState.period);
            setTotalPay(Math.floor(value));
            setPay(Math.floor(value / days));
        }
    };

    const handleApp = async (event) => {
        event.preventDefault();
        if (pay == '') {
            alert("일당은 필수 입력사항입니다.");
        }
        else {
            try {
                await axios.post('${baseUrl}/NursingApplication', {
                    nurse: appState.nurse,
                    patient: appState.patient,
                    pay: pay,
                    period: appState.period,
                    place: appState.place,
                    state: 0 // 0 신청대기, 1 간병중, 2 간병종료
                });
                console.log("post successful");

                if (appState.proposalId != null) {
                    await axios.patch(`${baseUrl}/NursingProposal/${appState.proposalId}`, {
                        state: 1
                    });
                }
                alert("신청 완료 되었습니다.");
                navigate("/user");
            } catch {
                alert("신청 실패, 다시 시도하세요");
                // window.location.reload()
            }
        }
    };

    return (
        <div className='nursingPage'>
            <Bar />
            <div className='content'>
                <div className='nursingCover'>
                    <div className='patientApp'>
                        <img src={profileImg} alt="profile" />
                        <div className='info'>
                            <h1>{appState.patient} 환자</h1>
                            <p>{appState.place}</p>
                        </div>
                    </div>
                    <div className='nurseApp'>
                        <img src={profileImg} alt="profile" />
                        <div className='info'>
                            <h1>{appState.nurse} 간병인</h1>
                            <p>{appState.period}</p>
                        </div>
                    </div>
                    <form className='payApp'>
                        <div className='payCover'>
                            <div className='payEach'>
                                <label htmlFor='daily'>일당</label>
                                <input
                                    value={pay}
                                    placeholder='일당을 제안하세요'
                                    onChange={handleTotalPay}
                                />
                                <p>원</p>
                            </div>
                            <div className='payEach'>
                                <label htmlFor='total'>총액</label>
                                <input
                                    value={totalPay}
                                    placeholder='총 수당'
                                    onChange={handlePay}
                                />
                                <p>원</p>
                            </div>
                        </div>
                        <input type='submit' onClick={handleApp} value="신청하기" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NursingApplicationPage;
