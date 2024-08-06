import React from 'react';
import '../style/Loading.css';
import leaf from "../img/leaf_orange.png"

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className='title'>
                <img src={leaf} />
                <h1>Nuspace</h1>
            </div>
            <div className="spinner"></div>
            <p>로딩 중...</p>
        </div>
    )
};

export default Loading;