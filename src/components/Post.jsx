import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import profileImg from "../img/profile.png"
import linkImg from "../img/link.png"
import "../style/Post.css"

function Post({ id, author_name, title, content }) {

  return (
    <div className='post'>
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
      <p>댓글</p>
      <Link to={`/jobOpening/post?q=${id}`}>
        <img src={linkImg} />
      </Link>
    </div>
  )
}

export default Post;
