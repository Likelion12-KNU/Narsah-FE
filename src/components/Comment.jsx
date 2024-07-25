import React from 'react';

function Comment({id, post_id, author_name, content}) {
    return (
        <div className='commnet'>
            <p>{author_name}</p>
            <h3>{content}</h3>
        </div>
    );
};

export default Comment;