import React, { useEffect, useState } from 'react';
import Post from './Post';
import "../style/PostList.css"

function PostList({query}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const filteredPosts = posts.filter((post) => (post.title.includes(query) || post.content.includes(query)));

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3000/post');
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
            {filteredPosts.map((post) => (
                <Post key={post.id} id={post.id} author_name={post.author_name} title={post.title} content={post.content} />
            ))}

        </div>
    );
};

export default PostList;
