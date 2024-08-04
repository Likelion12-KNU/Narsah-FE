import React from 'react';
import Bar from '../components/Bar';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../config/const';
import profileImg from "../img/profile.png";
import "../style/NursingApplicationAcceptPage.css"

function NursingApplicationAcceptPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const appInfo = location.state || {};

    const start = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(`${baseUrl}/NursingApplication/${appInfo.id}`, {
                state: 1
            });
            alert("'간병중'으로 상태 변경되었습니다.");
            navigate("/user/list");
        } catch (error) {
            console.log("Patch failed:", error);
        }
    };

    const refuse = async (event) => {
        event.preventDefault();
        try {
            await axios.delete(`${baseUrl}/NursingApplication/${appInfo.id}`);
            alert("간병 신청 거절을 완료했습니다.");
            navigate("/user/list");
        } catch (error) {
            console.log("Delete failed:", error);
        }
    };

    const end = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(`${baseUrl}/NursingApplication/${appInfo.id}`, {
                state: 2
            });
            alert("'간병 완료'로 상태 변경되었습니다.");
            navigate("/user/list");
        } catch (error) {
            console.log("Patch failed:", error);
        }
    }

    const review = async (event) => {
        //누가 구현좀 넘 힘드러......   // 요건 일단 패스..
    }

    return (
        <div className='acceptPage'>
            <Bar />
            <div className='content'>
                <div className='acceptCover'>
                    <div className='patient'>
                        <img src={profileImg} alt="profile" />
                        <div className='info'>
                            <h1>{appInfo.patient} 환자</h1>
                            <p>{appInfo.place}</p>
                        </div>
                    </div>
                    <div className='nurse'>
                        <img src={profileImg} alt="profile" />
                        <div className='info'>
                            <h1>{appInfo.nurse} 간병인</h1>
                            <p>{appInfo.period}</p>
                        </div>
                    </div>
                    <form className='pay'>
                        <div className='payCover'>
                        <div className='payEach'>
                            <label htmlFor='daily'>일당</label>
                            <input
                                value={appInfo.pay}
                                placeholder='일당을 제안하세요'
                                readOnly
                            />
                            <p>원</p>
                        </div>
                        </div>
                        {appInfo.state == 0 ? (
                            <div className='choice'>
                                <button onClick={start}>간병 시작하기</button>
                                <button onClick={refuse}>거절하기</button>
                            </div>
                        ) : appInfo.state == 1 ? (
                            <div className='choice'>
                                <button onClick={end}>간병 종료하기</button>
                                <button onClick={review}>후기 작성하기</button>
                            </div>
                            ) : appInfo.state == 2 ? (
                                <h1>완료된 간병기록 입니다.</h1>
                            ) : (<h1>유효하지 않은 간병기록 입니다.</h1>)}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default NursingApplicationAcceptPage;
