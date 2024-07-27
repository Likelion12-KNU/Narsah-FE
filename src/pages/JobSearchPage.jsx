import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bar from '../components/Bar';
import "../style/JobSearchPage.css";
import userOrange from '../img/user_orange.png';
import linkImg from "../img/link.png";

function JobSearchPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ license: '', affiliation: '', location: '' });

  const jobCards = [
    {
      id: 1,
      title: "간병사 모집",
      author: "홍길동",
      name: "기관",
      license: "有",
      affiliation: "無",
      location: "서울 성북구"
    },
    {
      id: 2,
      title: "개인 간병사 구함",
      author: "김철수",
      name: "개인",
      license: "有",
      affiliation: "無",
      location: "서울 노원구"
    },
    // 추가 카드들
  ];

  const filteredCards = jobCards.filter(card => 
    card.name.includes(searchTerm) &&
    (filter.license === '' || card.license === filter.license) &&
    (filter.affiliation === '' || card.affiliation === filter.affiliation) &&
    (filter.location === '' || card.location.includes(filter.location))
  );

  return (
    <div className='jobSearchPage'>
      <Bar />
      <header className='header'>
        <h1>간병인 일자리 검색</h1>
      </header>
      <div className='searchContainer'>
        <input 
          type="text" 
          placeholder="단위 검색" 
          className='searchBar'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='filters'>
          <select onChange={(e) => setFilter({ ...filter, license: e.target.value })}>
            <option value="">자격증</option>
            <option value="有">있음</option>
            <option value="無">없음</option>
          </select>
          <select onChange={(e) => setFilter({ ...filter, affiliation: e.target.value })}>
            <option value="">소속</option>
            <option value="有">있음</option>
            <option value="無">없음</option>
          </select>
          <input 
            type="text" 
            placeholder="지역" 
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
          />
        </div>
      </div>
      <div className='content'>
        {filteredCards.map((card, index) => (
          <div 
            key={index} 
            className='jobCard' 
            onClick={() => navigate(`/job/${card.id}`)}
          >
            <div className='cardContent'>
              <img src={userOrange} alt="user" className='userIcon' />
              <div className='cardText'>
                <h2>{card.title}</h2>
                <p>작성자: {card.author}</p>
                <p>단위: {card.name}</p>
                <p>간병사 자격증 보유 여부: {card.license}</p>
                <p>소속: {card.affiliation}</p>
                <p>지역: {card.location}</p>
              </div>
              <img className='linkImg' src={linkImg} alt="link" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobSearchPage;
