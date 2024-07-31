import { useState } from 'react';
import Bar from '../components/Bar';
import FilteredList from '../components/FilteredList';
import "../style/JobSearchPage.css";

function JobSearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ license: '', affiliation: '', location: '' });

    // //db로 떼기
    // const jobCards = [
    //     {
    //         id: 1,
    //         title: "간병사 모집",
    //         author: "홍길동",
    //         name: "기관",
    //         license: "有",
    //         affiliation: "無",
    //         location: "서울 성북구"
    //     },
    //     {
    //         id: 2,
    //         title: "개인 간병사 구함",
    //         author: "김철수",
    //         name: "개인",
    //         license: "有",
    //         affiliation: "無",
    //         location: "서울 노원구"
    //     },

    // ];

    // const filteredCards = jobCards.filter(card =>
    //     card.name.includes(searchTerm) &&
    //     (filter.license === '' || card.license === filter.license) &&
    //     (filter.affiliation === '' || card.affiliation === filter.affiliation) &&
    //     (filter.location === '' || card.location.includes(filter.location))
    // );

    return (
        <div className='jobSearchPage'>
            <Bar />
            <header className='header'>
                <h1>간병인 일자리 검색</h1>
            </header>
            <FilteredList />
        </div>
    );
}

export default JobSearchPage;
