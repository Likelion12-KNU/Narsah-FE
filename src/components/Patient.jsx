import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import userOrange from '../img/user_orange.png';
import "../style/Patient.css";

function Patient({
    id,
    name,
    age,
    height,
    weight,
    gender,
    careLocation,
    carePeriod,
    diagnosis,
    hospitalizationPurpose,
    roomType,
    mobilityStatus,
    assistiveDevices,
    medications
}) {

    return (
        <div className="detailCard">
            <div className="userHeader">
                <div className="userInfo">
                    <img src={userOrange} alt="user" className="userIcon" />
                    <div><h2>{name} 환자</h2></div>
                </div>
                <div className="userAttributes">
                    <ul>
                        <li><span>나이</span> <strong>{age}</strong> 세</li>
                        <li><span>키</span> <strong>{height}</strong> cm</li>
                        <li><span>몸무게</span> <strong>{weight}</strong> kg</li>
                        <li><span>성별</span> <strong>{gender}</strong></li>
                        <li><span>장소</span> <strong>{careLocation}</strong></li>
                    </ul>
                </div>

            </div>
            <div className="detailInfo">
                <h3>세부 정보</h3>
                <div className="detailItem headInfo">
                    <span>요구 간병 기간</span> <strong>{carePeriod}</strong>
                </div>
                <div className="detailItem headInfo">
                    <span>진단명</span> <strong>{diagnosis}</strong>
                </div>
                <div className="detailItem">
                    <span>입원 목적:</span> <strong>{hospitalizationPurpose}</strong>
                </div>
                <div className="detailItem">
                    <span>병실 유형:</span> <strong>{roomType}</strong>
                </div>
                <div className="detailItem">
                    <span>거동 상태:</span> <strong>{mobilityStatus}</strong>
                </div>
                <div className="detailItem">
                    <span>보조 장치 여부:</span> <strong>{assistiveDevices}</strong>
                </div>
                <div className="detailItem">
                    <span>복용 약:</span> <strong>{medications}</strong>
                </div>
            </div>
        </div>
    )
}

export default Patient;
