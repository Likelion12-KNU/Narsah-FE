import React, { useEffect, useState } from 'react';
import Post from './Post';
import "../style/PostList.css"

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let response;
                // api가 구인구직 나눠져있어 일단 나눠서 할당 
                if (type === 'jobOpening') {
                    response = await fetch(`${baseUrl}/api/board/jobposting/lists`);
                } else if (type === 'jobSearch') {
                    response = await fetch(`${baseUrl}/api/board/jobsearch/lists`);
                }
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='postList'>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} author_name={post.author_name} title={post.title} content={post.content} />
            ))}
        </div>
    );
};

export default PostList;
