import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/PostForm.css";
import axios from 'axios';

function PostForm({ author_name, type }) {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentsChange = (e) => {
        setContents(e.target.value);
    };

    const handlePostForm = async (e) => {
        e.preventDefault(); // post 요청 시 페이지 새로고침을 막습니다
        try {
            let url;
            if (type === 'jobOpening') {
                url = `${baseUrl}/api/board/jobposting`;
            } else if (type === 'jobSearch') {
                url = `${baseUrl}/api/board/jobsearch`;
            }

            await axios.post(url, {
                title: title,
                content: contents,
                author_name: author_name
            });
            console.log("post successful");

            if (type === 'jobOpening') {
                navigate("/jobOpening"); // post 성공시 구인 게시물 페이지로 이동
            } else if (type === 'jobSearch') {
                navigate("/jobSearch"); // post 성공시 구직 게시물 페이지로 이동
            }
        } catch (error) {
            console.log("fail to post", error);
        }
    };

    return (
        <form className='postForm'>
            <h1>게시물 작성</h1>
            <div className="formTitle">
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={handleTitleChange}
                    placeholder='제목을 입력하세요' />
            </div>
            <div className='formBody'>
                <label htmlFor='contents'>Content</label>
                <textarea
                    id='contents'
                    onChange={handleContentsChange}
                    placeholder='내용을 입력하세요'
                    value={contents} />
            </div>
            <input type='submit' value="작성" onClick={handlePostForm} />
        </form>
    );
};

export default PostForm;
