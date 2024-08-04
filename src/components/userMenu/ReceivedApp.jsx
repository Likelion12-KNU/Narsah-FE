import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../style/ReceivedApp.css"

function ReceivedApp({ user }) {
    const [patients, setPatients] = useState(null);
    const navigate = useNavigate();

    // appState를 useState로 관리
    const [appState, setAppState] = useState({
        nurse: user ? user.name : '',
        patient: null,
        period: "2023.01.01 부터 20204.01.01 까지",
        place: "강원대학교병원"
    });

    const fetchPatients = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/NursingProposal?nurse=${user.name}`);

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

    useEffect(() => {
        if (user) {
            fetchPatients();
        }
    }, [user]);

    const handleApp = (name, id) => {
        const updatedAppState = {
            ...appState,
            patient: name,
            proposalId : id
        };
        setAppState(updatedAppState);
        navigate("/application", { state: updatedAppState });
    };

    return (
        <div className='receivedApp'>
            <h1>받은 간병 제안</h1>
            <ul className='each'>
                {patients && patients.length > 0 ? (
                    patients.map((patient) => (
                        <li key={patient.id} onClick={() => handleApp(patient.patient, patient.id)}>
                            {patient.patient} 환자
                            {patient.state === 0 ? (<p>&#40;확인 대기&#41;</p>) : (<p>&#40;확인 완료&#41;</p>)}
                        </li>
                    ))
                ) : (
                    <h3>받은 간병 제안이 없습니다</h3>
                )}
            </ul>
        </div>
    );
}

export default ReceivedApp;
