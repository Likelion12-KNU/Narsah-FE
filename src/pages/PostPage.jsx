import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Bar from '../components/Bar';
import "../style/PostPage.css";
import profileImg from "../img/profile.png";
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import delImg from "../img/del.png";

function PostPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const postId = queryParams.get('q');
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const toJobCard = () => {
        navigate(`/job/${author.id}`);
    };

    useEffect(() => {
        const fetchPostAndComments = async () => {
            try {
                const responsePost = await axios.get(`http://localhost:3000/post?id=${postId}`);
                if (responsePost.data.length > 0) {
                    const postData = responsePost.data[0];
                    setPost(postData);

                    const responseComment = await axios.get(`http://localhost:3000/comment?post_id=${postId}`);
                    if (responseComment.data.length > 0) {
                        setComments(responseComment.data);
                    } else {
                        setComments([]);
                    }

                    const responseAuthor = await axios.get(`http://localhost:3000/JobCard?author=${postData.author_name}`);
                    if (responseAuthor.data.length > 0) {
                        setAuthor(responseAuthor.data[0]);
                    } else {
                        console.log("No such author");
                    }
                } else {
                    setPost(null);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPostAndComments();
    }, [postId]);

    const delPost = async () => {
        try {
            const responseComments = await axios.get(`http://localhost:3000/comment?post_id=${postId}`);
            const deleteCommentsPromises = responseComments.data.map(comment =>
                axios.delete(`http://localhost:3000/comment/${comment.id}`)
            );
            await Promise.all(deleteCommentsPromises);

            await axios.delete(`http://localhost:3000/post/${postId}`);
            navigate("/jobOpening");
            console.log("post and comments delete successful");
        } catch (error) {
            console.log("fail to delete post or comments", error);
        }
    };

    const handleCommentAdd = (newComment) => {
        setComments([...comments, newComment]);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='postPage'>
            <Bar />
            <div className='content'>
                <Link to="/jobOpening">&lt;&lt; 이전으로</Link>
                {post ? (
                    <div className='post'>
                        <div className='title'>
                            <img
                                src={profileImg}
                                onClick={toJobCard}
                                alt="Profile" 
                            />
                            <div className='titleCover'>
                                <p>{post.author_name}</p>
                                <h1>{post.title}</h1>
                            </div>
                            <button onClick={delPost}><img src={delImg} alt="Delete" /></button>
                        </div>
                        <div className='postContent'>
                            <pre>{post.content}</pre>
                        </div>
                        <CommentList comments={comments} />
                        <CommentForm post_id={post.id} commentAdd={handleCommentAdd} />
                    </div>
                ) : (
                    <div>게시글을 찾을 수 없습니다.</div>
                )}
            </div>
        </div>
    );
}

export default PostPage;
