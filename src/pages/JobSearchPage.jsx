import { useState } from 'react';
import Bar from '../components/Bar';
import JobCard from '../components/JobCard';
import "../style/JobSearchPage.css";
import linkImg from "../img/link.png";

function JobSearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ license: '', affiliation: '', location: '' });

    //db로 떼기
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
            {/* 이거 실종 */}
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
                    <JobCard
                        key={card.id}
                        index={index}
                        id={card.id}
                        title={card.title} 
                        author={card.author}
                        name={card.name} 
                        license={card.license} 
                        affiliation={card.affiliation}
                        location={card.location}
                    />
                ))}
            </div>
        </div>
    );
}

export default JobSearchPage;
