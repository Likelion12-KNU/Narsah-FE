// NursingPage.jsx
import Bar from '../components/Bar';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import profileImg from "../img/user_orange.png";
import "../style/NursingPage.css";

function NursingPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const nurseName = queryParams.get('q');
    const [nurse, setNurse] = useState(null);
    const navigete = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const re = await axios.get(`http://localhost:3000/nurse?name=${nurseName}`);
                if (re.data.length > 0) {
                    setNurse(re.data[0]);
                    console.log("get successful");
                } else {
                    setNurse([]);
                }
            } catch (error) {
                console.error("get failed", error);
            }
        };

        fetchData();
    }, [nurseName]);


    const handleProposal = async() => {
        // nurse 빼고 다 임시데이터. 백엔드 연동시 세션에서 유저 정보를 받아옴.
        // 유저가 "간병인"일 시 alert("권한이 없습니다") 실행, mainPage로 이동
        try {
            await axios.post("http://localhost:3000/NursingProposal", {
                nurse: nurse.name,
                patient: "김환자",
                period: "2024.04.01 부터 2025.01.01 까지",
                place: "땡땡병원",
                state: 0
            });
            alert("제안 완료되었습니다.");
            navigete("/jobSearch");
        } catch {
            console.log("post failed");
        }
    }

    return (
        <div className='nursingPage'>
            <Bar />
            <div className='content'>
                <div className="detailCard">
                    <div className="userHeader">
                        <div className="userInfo">
                            <img src={profileImg} alt="user" className="userIcon" />
                            <div><h2>{nurse?.name} 간병인</h2></div>
                        </div>
                        <div className="userAttributes">
                            <ul>
                                <li><span>나이</span> <strong>{nurse?.age}</strong> 세</li>
                                <li><span>성별</span> <strong>{nurse?.gender}</strong></li>
                                <li><span>지역</span> <strong>{nurse?.location}</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="detailInfo">
                        <h3>세부 정보</h3>
                        <div className="detailItem">
                            <span>자기소개</span> <strong>{nurse?.introduce}</strong>
                        </div>
                        <div className="detailItem">
                            <span>자격증</span> <strong>{nurse?.license}</strong>
                        </div>
                        <div className="detailItem">
                            <span>간병 경력</span> <strong>{nurse?.career}</strong>
                        </div>
                        <div className="detailItem">
                            <span>간병 분야</span> <strong>{nurse?.nursingField}</strong>
                        </div>
                    </div>
                    <button onClick={handleProposal}>간병 제안</button>
                </div>
            </div>
        </div>
    );
};

export default NursingPage;
