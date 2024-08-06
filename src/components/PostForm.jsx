import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config/const';
import "../style/PostForm.css";
import axios from 'axios';

function PostForm({ type }) {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [image, setImage] = useState(null);
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

        if (type == 'guin') {
            const formData = new FormData();
            const postdata = {
                title: title,
                content: contents
            };
            const json = JSON.stringify(postdata);
            const blob = new Blob([json], { type: 'application/json' });
            formData.append('guin', blob);
            if (image) {
                formData.append('image', image);
            }

            try {
                await axios.post(`${baseUrl}/api/post/${type}/create`,
                    formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                });
                console.log("Post successful");
                navigate("/jobOpening"); // post 성공시 구인 게시물 페이지로 이동
            } catch (err) {
                console.log("Failed to post: ", err.message);
            }
        } else if (type == 'gujik') {
            const formData = new FormData();
            const postdata = {
                title: title,
                content: contents
            };
            const json = JSON.stringify(postdata);
            const blob = new Blob([json], { type: 'application/json' });
            formData.append('gujik', blob);
            if (image) {
                formData.append('image', image);
            }

            try {
                await axios.post(`${baseUrl}/api/post/${type}/create`,
                    formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                });
                console.log("Post successful");
                navigate("/jobSearch"); // post 성공시 구인 게시물 페이지로 이동
            } catch (err) {
                console.log("Failed to post: ", err.message);
            }
        }
    };

        return (
            <form className='postForm' onSubmit={handlePostForm}>
                {type === 'guin' ? (<h1>간병인 구해요</h1>) : (<h1>환자 찾기</h1>)}
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
                    <input
                        type='file'
                        accept='image/*'
                        onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <input type='submit' value="작성" />
            </form>
        );
    };

    export default PostForm;
