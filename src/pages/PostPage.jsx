import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Bar from '../components/Bar';
import Post from '../components/Post';
import "../style/PostPage.css"
import profileImg from "../img/profile.png"
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

function PostPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const postId = queryParams.get('q');

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 백엔드에서 게시글 데이터를 가져오는 함수
        const fetchPost = async () => {
            try {
                // Post 불러오기
                const response = await axios.get(`http://localhost:3000/post?id=${postId}`);
                // 응답이 배열이라면 첫 번째 요소를 사용
                if (response.data.length > 0) {
                    setPost(response.data[0]);
                } else {
                    setPost(null);
                }
                // 댓글 불러오기
                const responseComment = await axios.get(`http://localhost:3000/comment?post_id=${postId}`);
                if (responseComment.data.length > 0) {
                    setComments(responseComment.data);
                } else {
                    setComments([]);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

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
                {post ? (
                    <div className='post'>
                        <div className='title'>
                            <img src={profileImg} />
                            <div className='titleCover'>
                                <p>{post.author_name}</p>
                                <h1>{post.title}</h1>
                            </div>
                        </div>
                        <div className='postContent'>
                            <pre>{post.content}</pre>
                        </div>
                        <CommentList comments={comments}/>
                        <CommentForm post_id={post.id}/>
                    </div>
                ) : (
                    <div>게시글을 찾을 수 없습니다.</div>
                )}
            </div>
        </div>
    );
}

export default PostPage;
