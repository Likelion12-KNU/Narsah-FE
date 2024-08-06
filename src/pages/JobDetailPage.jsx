import { useLocation, useNavigate } from 'react-router-dom';
import "../style/JobDetailPage.css";
import Bar from '../components/Bar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../config/const';

function formatDateString(dateString) {
    if (dateString.length !== 6) {
        throw new Error('Invalid date format. Expected yymmdd.');
    }

    const year = '20' + dateString.slice(0, 2);
    const month = dateString.slice(2, 4);
    const day = dateString.slice(4, 6);

    return `${year}.${month}.${day}`;
}

function JobDetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state || {};
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/post/guin/${state.id}/author`, {
                    params: {
                        id: state.id
                    },
                    withCredentials: true,
                    headers: {
                        'Accept-Language': 'ko-KR',
                        'Accept': '*/*',
                        'Origin': 'http://nurspace-narsha.duckdns.org',
                        'Referer': 'http://nurspace-narsha.duckdns.org/'
                    }
                });
                setUser(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [state.id]);

    const handleApp = () => {
        
    };

    return (
        <div className="jobDetailPage">
            <Bar />
            <div className='content'>
                <div className="detailCard">
                    {user && (
                        <>
                            <div className="userHeader">
                                <div className="userInfo">
                                    <img src={userOrange} alt="user" className="userIcon" />
                                    <div><h2>{user.name} 환자</h2></div>
                                </div>
                                <div className="userAttributes">
                                    <ul>
                                        <li><span>나이</span> <strong>{user.age}</strong> 세</li>
                                        <li><span>키</span> <strong>{user.height}</strong> cm</li>
                                        <li><span>몸무게</span> <strong>{user.weight}</strong> kg</li>
                                        <li><span>성별</span> {user.gender === 0 ? (<strong>남자</strong>) : (<strong>여자</strong>)}</li>
                                        <li><span>장소</span> <strong>{user.location}</strong></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="detailInfo">
                                <h3>세부 정보</h3>
                                <div className="detailItem">
                                    <span>요구 간병 기간</span>
                                    <strong>
                                        {formatDateString(user.patientMedRecord.startDay)} ~ {formatDateString(user.patientMedRecord.endDay)}
                                    </strong>
                                </div>
                                <div className="detailItem">
                                    <span>진단명</span> <strong>{user.patientMedRecord.diagnosis}</strong>
                                </div>
                                <div className="detailItem">
                                    <span>입원 목적</span> <strong>{user.patientMedRecord.hospitalize}</strong>
                                </div>
                                <div className="detailItem">
                                    <span>병실 유형</span> <strong>{user.patientMedRecord.ward}</strong>
                                </div>
                                <div className="detailItem">
                                    <span>거동 상태</span> <strong>{user.patientMedRecord.movement}</strong>
                                </div>
                                <div className="detailItem">
                                    <span>보조 장치 여부</span> <strong>{user.patientMedRecord.device}</strong>
                                </div>
                                <div className="detailItem">
                                    <span>복용 약</span> <strong>{user.patientMedRecord.drug}</strong>
                                </div>
                            </div>
                            <button onClick={handleApp}>간병 신청</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JobDetailPage;
