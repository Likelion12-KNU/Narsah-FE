import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../style/List.css"

function List({ user }) {
    const [nurses, setNurses] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNurses = async () => {
            try {
                console.log("Fetching nurses for user:", user); // 사용자 정보가 올바르게 로드되었는지 확인
                const response = await axios.get(`http://localhost:3000/NursingApplication?patient=${user.name}`);
                console.log("Fetched data:", response.data); // 응답 데이터를 로그로 확인

                if (response.data.length > 0) {
                    setNurses(response.data);
                } else {
                    setNurses([]);
                }

                console.log("Nurses state updated:", response.data.length > 0 ? response.data : []);
            } catch (error) {
                console.log("cannot get application data:", error);
            }
        };

        if (user) {
            fetchNurses();
        }
    }, [user]);


    const handleLink = () => {
        
    }

    return (
        <div className='list'>
            <h1>받은 간병인 신청</h1>
            <ul className='each'>
                {nurses && nurses.length > 0 ? (
                    nurses.map((nurse) => (
                        <li key={nurse.id} onClick={() => navigate("/accept", {state: nurse})}>{nurse.nurse} 간병인 
                        {nurse.state == 0 ? (<p>&#40;신청 대기&#41;</p>) : 
                        nurse.state == 1 ? (<p>&#40;간병 중&#41;</p>) :
                        (<p>&#40;간병 완료&#41;</p>)}</li>
                    ))
                ) : (
                    <h3>받은 신청이 없습니다.</h3>
                )}
            </ul>
        </div>
    );
};

export default List;
