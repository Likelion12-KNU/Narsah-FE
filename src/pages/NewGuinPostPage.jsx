import React from 'react';
import Bar from "../components/Bar.jsx"
import PostForm from "../components/PostForm"

function NewGuinPostPage() {
    return (
        <div className='newPostPage'>
            <Bar/>
            <div className='content'>
                <PostForm type={"guin"}/>
                {/* 백엔드 연동시 http세션의 로그인된 닉네임 get 요청 
                 로그인되어 있지 않다면 "익명" return 하도록 */}
            </div>
        </div>
    );
};

export default NewGuinPostPage;