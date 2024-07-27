import React from 'react';
import Comment from './Comment';
import "../style/CommentList.css"

function CommentList({ comments }) {
    return (
        <div className='commentList'>
            <h1 className='commentTitle'>Comments</h1>
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <Comment key={comment.id} id={comment.id} author_name={comment.author_name} content={comment.content}/>
                ))
            ) : (
                <div className='noComment'>No Comment :&#40; </div>
            )}
        </div>
    );
};

export default CommentList;