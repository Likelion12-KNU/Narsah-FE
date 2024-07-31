import React, { useEffect, useState } from 'react';
import JobCardList from './JobCardList';
import "../style/Filter.css";

function Filter() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ license: '', affiliation: '', location: '' });

    return (
        <>
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
                        <option value="없음">없음</option>
                        <option value="간병사">간병사</option>
                        <option value="요양보호사">요양보호사</option>
                        <option value="기타">기타</option>

                    </select>
                    <select onChange={(e) => setFilter({ ...filter, affiliation: e.target.value })}>
                        <option value="">소속</option>
                        <option value="없음">없음</option>
                        <option value="있음">있음</option>
                    </select>
                    <input
                        type="text"
                        placeholder="지역"
                        onChange={(e) => setFilter({ ...filter, location: e.target.value })}
                    />
                </div>
            </div>
            <div className='content'>
                <JobCardList 
                    license = {filter.license}
                    affiliation = {filter.affiliation}
                    location = {filter.location}
                />
            </div>
        </>
    )
}

export default Filter;