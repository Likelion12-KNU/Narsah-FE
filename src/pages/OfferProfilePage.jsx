import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../style/OfferProfilePage.css";
import profileImg from "../img/profile.png";
import delImg from "../img/del.png";
import Bar from '../components/Bar';
import Loading from '../components/Loading';
import { baseUrl } from '../config/const';

const OfferProfilePage = ({id}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const offerId = queryParams.get('q');
  const navigate = useNavigate();

  const [offer, setOffer] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/post/guin/${id}/author`);
        if (response.data.length > 0) {
          setOffer(response.data[0]);
        } else {
          setOffer(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, [offerId]);

  const delOffer = async () => {
    try {
      await axios.delete(`${baseUrl}/offer/${offerId}`);
      navigate("/jobOpening");
      console.log("Offer deleted successfully");
    } catch (error) {
      console.log("Failed to delete offer", error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if(loading) {
    return <Loading/>;
  }

  return (
    <div className='offerProfilePage'>
      <Bar />
      <div className='content'>
        <Link to="/jobOpening">&lt;&lt; 이전으로</Link>
        {loading ? (
          <div>Loading...</div>
        ) : offer ? (
          <div className='profile'>
            <div className='title'>
              <img src={profileImg} alt="Profile" />
              <div className='titleCover'>
                <p>{offer.name}</p>
                <h1>{offer.role}</h1>
              </div>
              <button onClick={delOffer}><img src={delImg} alt="Delete" /></button>
            </div>
            <div className='profileDetails'>
              <div className='profile-photo'></div>
              <div className='profile-info'>
                <div className='profile-name'>
                  <span className='name'>{offer.name}</span>
                  <span className='role'>{offer.role}</span>
                </div>
                <div className='profile-icons'>
                  <div className='icon-bg'></div>
                  <div className='icon'></div>
                </div>
              </div>
              <div className='profile-details'>
                <span className='detail'>장소 {offer.location}</span>
                <span className='detail'>성별 {offer.gender}</span>
                <span className='detail'>키 {offer.height} cm</span>
                <span className='detail'>몸무게 {offer.weight} kg</span>
                <span className='detail'>나이 {offer.age} 세</span>
              </div>
            </div>
            <div className='additional-info'>
              <div className='additional-details'>
                <span className='label'>거동 상태</span>
                <span className='value'>{offer.mobility}</span>
                <span className='label'>병실유형</span>
                <span className='value'>{offer.roomType}</span>
                <span className='label'>입원목적</span>
                <span className='value'>{offer.purpose}</span>
                <span className='label'>보조 장치</span>
                <span className='value'>{offer.assistiveDevice}</span>
                <span className='label'>복용 약</span>
                <span className='value'>{offer.medication}</span>
                <span className='label'>요구 간병 기간</span>
                <span className='value'>{offer.carePeriod}</span>
                <span className='label'>진단명</span>
                <span className='value'>{offer.diagnosis}</span>
              </div>
            </div>
            <div className='action-button'>
              <span className='button-text'>간병 신청</span>
            </div>
          </div>
        ) : (
          <div>Offer를 찾을 수 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default OfferProfilePage;
