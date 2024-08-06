import React, { useEffect, useState } from 'react';
import Post from './Post';
import { baseUrl } from '../config/const';
import "../style/PostList.css"
import axios from 'axios';
import Loading from './Loading';

function PostList({ query }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 백엔드 연동되면 삭제

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/post/guin/list`, {
                    withCredentials: true, // 자격 증명 포함
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Accept-Language': 'ko-KR',
                        // 'Accept': '*/*',
                        // 'Origin': 'http://nurspace-narsha.duckdns.org',
                        // 'Referer': 'http://nurspace-narsha.duckdns.org/',
                    }
                });
                setPosts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // search filter
    const filteredPosts = posts.filter((post) => (post.title.includes(query) || post.content.includes(query) || post.authorName.includes(query)));

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='postList'>
            {filteredPosts.map((post) => (
                // createdAt, imageUrl props 제출 가능
                // code == 0일때 구인
                <Post key={post.id} id={post.id} title={post.title} content={post.content} author_name={post.authorName} profileImg={post.imageUrl} code={0}/>
            ))}
        </div>
    );
};

export default PostList;
