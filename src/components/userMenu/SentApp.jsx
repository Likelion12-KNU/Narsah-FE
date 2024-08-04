import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../config/const';
import "../../style/SentApp.css"

function SentApp({user}) {
    const [patients, setPatients] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get(`${baseUrl}/NursingApplication?nurse=${user.name}`);

                if (response.data.length > 0) {
                    setPatients(response.data);
                } else {
                    setPatients([]);
                }

                console.log("Nurses state updated:", response.data.length > 0 ? response.data : []);
            } catch (error) {
                console.log("cannot get proposal data:", error);
            }
        };

        if (user) {
            fetchPatients();
        }
    }, [user]);


    return (
        <div className='sentApp'>
            <h1>보낸 간병 신청</h1>
            <ul className='each'>
                {patients && patients.length > 0 ? (
                    patients.map((patient) => (
                        <li key={patient.id}>{patient.patient} 환자
                        {patient.state == 0 ? (<p>&#40;신청 대기&#41;</p>) : 
                        patient.state == 1 ? (<p>&#40;간병중&#41;</p>) :
                        (<p>&#40;간병 완료&#41;</p>)}</li>
                    ))
                ) : (
                    <h3>보낸 간병 신청이 없습니다</h3>
                )}
            </ul>
        </div>
    );
};

export default SentApp;