import { useState } from 'react';
import Bar from '../components/Bar';
import Filter from '../components/Filter';
import "../style/JobSearchPage.css";

function JobSearchPage() {
    return (
        <div className='jobSearchPage'>
            <Bar />
            <header className='header'>
                <h1>간병인 일자리 검색</h1>
            </header>
            <Filter />
        </div>
    );
}

export default JobSearchPage;
