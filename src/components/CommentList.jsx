import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
    return (
        <div className='commentList'>
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <Comment key={comment.id} id={comment.id} author_name={comment.author_name} content={comment.content}/>
                ))
            ) : (
                <div>댓글이 없습니다.</div>
            )}
        </div>
    );
};

export default CommentList;