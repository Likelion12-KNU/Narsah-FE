import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config/const';
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

        function formDataToJSON(formData) {
            const obj = {};
            formData.forEach((key, value) => {
                // 기존 키가 이미 존재하는 경우 배열로 변환하여 여러 값을 수용
                if (obj[key]) {
                    if (!Array.isArray(obj[key])) {
                        obj[key] = [obj[key]];
                    }
                    obj[key].push(value);
                } else {
                    obj[key] = value;
                }
            });
            return obj;
        }

        e.preventDefault(); // post 요청 시 페이지 새로고침을 막습니다
        try {
            // axios에서 FormData로 줘야 함.
            const postData = {
                title: title,
                content: contents
            };
            const guin = new FormData();
            const json = JSON.stringify(postData);
            const blob = new Blob([json], { type: 'application/json' });
            guin.append('guin', blob)

            const res = await axios.post(`${baseUrl}/api/post/guin/create`, guin, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res);

            console.log("post successful");
            navigate("/jobOpening"); // post 성공시 구인 게시물 페이지로 이동
        } catch (err) {
            console.log("fail to post: ", err.message);
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
