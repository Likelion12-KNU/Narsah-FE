import React, { useState } from 'react';
import axios from 'axios';
import "../style/CommentForm.css";

function CommentForm({ post_id }) {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault();

        // POST 요청을 보내는 함수
        try {
            await axios.post('http://localhost:3000/comment', {
                post_id: post_id,
                author_name: '익명',
                content: comment
            });

            window.location.reload();
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
