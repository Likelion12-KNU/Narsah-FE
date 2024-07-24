import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Bar from '../components/Bar';
import Post from '../components/Post';

function PostPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const postId = queryParams.get('q');

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 백엔드에서 게시글 데이터를 가져오는 함수
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/post?id=${postId}`);
                // 응답이 배열이라면 첫 번째 요소를 사용
                if (response.data.length > 0) {
                    setPost(response.data[0]);
                } else {
                    setPost(null);
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
                    <Post key={post.id} id={post.id} author_name={post.author_name} title={post.title} content={post.content}/>
                ) : (
                    <div>게시글을 찾을 수 없습니다.</div>
                )}
            </div>
        </div>
    );
}

export default PostPage;
