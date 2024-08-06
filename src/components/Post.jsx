import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import profileImg from "../img/profile.png"
import linkImg from "../img/link.png"
import "../style/Post.css"

// code 0: guin, code 1: gugik
function Post({ id, author_name, title, content, profileImg, code }) {
    // route -> author의 userprofile로 이동
    const condUrl = (code == 0) ? (`/offerProfile=${author_name}`) : (`/nurseProfile?q=${author_name}`);
    
    return (
        <Link className='post' to={condUrl}>
            <div className='title'>
                <img src={profileImg} />
                <div className='titleCover'>
                    <p>{author_name}</p>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className='postContent'>
                <pre>{content}</pre>
            </div>
            {/* <p>댓글</p> */}
            <img src={linkImg} />
        </Link>
    )
}

export default Post;
