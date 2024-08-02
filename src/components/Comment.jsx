import React from 'react';
import "../style/Comment.css"
import commentImg from "../img/comment.png"
import delImg from "../img/del.png"
import axios from 'axios';

function Comment({ id, post_id, author_name, content }) {
    const delComment = async (event) => {
        event.preventDefault();

        try {
            await axios.delete(`${baseUrl}/api/comment/${id}`);
            window.location.reload();
            console.log("comment delete successful")
        }
        catch {
            console.log("fail to delete comment");
        }
    };

    return (
        <div className='comment'>
            <img src={commentImg}/>
            <div className='commentCover'>
                <h3>{author_name}</h3>
                <pre>{content}</pre>
            </div>
            <button onClick={delComment}><img src={delImg}/></button>
        </div>
    );
};

export default Comment;