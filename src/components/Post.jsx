import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { baseUrl } from '../config/const'
import axios from 'axios'
import profileImg from "../img/profile.png"
import linkImg from "../img/link.png"
import "../style/Post.css"

// code 0: guin, code 1: gugik
function Post({ id, author_name, title, content, profileImg, code }) {
    // route -> author의 userprofile로 이동
    const condUrl = (code == 0) ? (`/offerProfile=${author_name}`) : (`/nurseProfile?q=${author_name}`);
    const delUrl = (code == 0) ? (`/api/post/guin/delete/${id}`) : (`/api/post/gujik/delete/${id}`);
    
    const delPost = async () => {
        
        try {
            await axios.delete(`${baseUrl}${delUrl}`);
            (code == 0) ? navigate("/jobOpening") : navigate("/jobSearching");
            console.log("post and comments delete successful");
        } catch (error) {
            console.log("fail to delete post or comments", error);
        }
    };

    return (
        <>
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
        <button className='delbtn' onClick={delPost} >삭제</button>
        
        </>
    )
}

export default Post;
