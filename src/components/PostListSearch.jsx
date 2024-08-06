import React, { useEffect, useState } from 'react';
import Post from './Post';
import { baseUrl } from '../config/const';
import "../style/PostList.css"
import axios from 'axios';
import Loading from './Loading';

function PostListSearch({query}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/post/gujik/list`, {
                withCredentials: true, // 자격 증명 포함
                headers: {
                    'Content-Type': 'application/json'
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
                <Post key={post.id} id={post.id} title={post.title} content={post.content} author_name={post.authorName} profileImg={post.imageUrl} code={1}/>
            ))}
        </div>
    );
};

export default PostListSearch;
