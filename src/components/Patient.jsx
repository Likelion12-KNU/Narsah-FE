import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import profileImg from "../img/profile.png"
import userOrange from '../img/user_orange.png';
import linkImg from "../img/link.png"


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
                <img src={userOrange} alt="user" className="userIcon" />
                <div className="userInfo">
                    <h2>{name} 환자</h2>
                    <div className="userAttributes">
                        <p><strong>나이:</strong> {age}세</p>
                        <p><strong>키:</strong> {height}cm</p>
                        <p><strong>몸무게:</strong> {weight}kg</p>
                        <p><strong>성별:</strong> {gender}</p>
                        <p><strong>간병 장소:</strong> {careLocation}</p>
                    </div>
                </div>
            </div>
            <div className="detailInfo">
                <h3>세부 정보</h3>
                <p><strong>요구 간병 기간:</strong> {carePeriod}</p>
                <p><strong>진단명:</strong> {diagnosis}</p>
                <p><strong>입원 목적:</strong> {hospitalizationPurpose}</p>
                <p><strong>병실 유형:</strong> {roomType}</p>
                <p><strong>거동 상태:</strong> {mobilityStatus}</p>
                <p><strong>보조 장치 여부:</strong> {assistiveDevices}</p>
                <p><strong>복용 약:</strong> {medications}</p>
            </div>
        </div>
    )
}

export default Patient;
