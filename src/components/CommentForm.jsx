import React, { useState } from 'react';
import axios from 'axios';
import "../style/CommentForm.css";

function CommentForm({ post_id , commentAdd}) {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault(); // post 요청 시 새로고침을 막습니다

        // POST 요청을 보내는 함수
        try {
            const response = await axios.post(`${baseUrl}/api/comment`, {
                post_id: post_id,
                // author_name: '익명',
                content: comment
            });
            commentAdd(re.data); // 상위 컴포넌트(PostPage)로 추가된 댓글의 정보를 전달
            setComment(""); // 댓글 입력창 초기화
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    return (
        <div className='commentForm'>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type='text'
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder='댓글을 입력하세요'
                />
                <button type='submit'>send</button>
            </form>
        </div>
    );
}

export default CommentForm;
