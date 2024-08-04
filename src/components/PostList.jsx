import React, { useEffect, useState } from 'react';
import Post from './Post';
import { baseUrl } from '../config/const';
import "../style/PostList.css"

function PostList({query}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             let response;
    //             // api가 구인구직 나눠져있어 일단 나눠서 할당 
    //             if (type === 'jobOpening') {
    //                 response = await fetch(`${baseUrl}/api/board/jobposting/lists`);
    //             } else if (type === 'jobSearch') {
    //                 response = await fetch(`${baseUrl}/api/board/jobsearch/lists`);
    //             }
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             setPosts(data);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchPosts();
    // }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    // 백엔드 연동되면 삭제
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3000/post');
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
