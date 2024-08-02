import React, { useEffect, useState } from 'react';
import Post from './Post';
import { baseUrl } from '../config/const';
import "../style/PostList.css"

function PostList({query}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // default - get
                // api 주소에 howMany, pageNum query 적용해야 함
                const response = await fetch(`${baseUrl}/api/board/jobposting/lists?howMany=100&pageNum=0`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // search filter
    const filteredPosts = posts.filter((post) => (post.title.includes(query) || post.content.includes(query)));

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='postList'>
            {filteredPosts.map((post) => (
                <Post key={post.id} id={post.id} author_name={post.author_name} title={post.title} content={post.content} />
            ))}
        </div>
    );
};

export default PostList;
