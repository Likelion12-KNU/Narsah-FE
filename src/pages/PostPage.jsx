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
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 백엔드에서 게시글 데이터를 가져오는 함수
        const fetchPost = async () => {
            try {
                // Post 불러오기
                const response = await axios.get(`${baseUrl}/api/board/jobposting/${postId}`); // 구인 상세 게시판 api
                // 응답이 배열이라면 첫 번째 요소를 사용
                if (response.data.length > 0) {
                    setPost(response.data[0]);
                } else {
                    setPost(null);
                }
                // 댓글 불러오기
                const responseComment = await axios.get(`${baseUrl}/api/comment/${postId}`); // 게시판 ID에 포함되어 있는 댓글 보기 api
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

    const delPost = async () => {
        try {
            // 댓글 삭제
            const responseComments = await axios.get(`${baseUrl}/api/comment/${postId}`); // 댓글 api
            const deleteCommentsPromises = responseComments.data.map(comment => 
                axios.delete(`${baseUrl}/api/comment/${comment.id}`) // 댓글 api
            );
            await Promise.all(deleteCommentsPromises);

            // 게시글 삭제
            await axios.delete(`${baseUrl}/api/board/jobposting/${postId}`);
            navigate("/jobOpening");
            console.log("post and comments delete successful");
        }
        catch (error) {
            console.log("fail to delete post or comments", error);
        }
    };

    const handleCommentAdd = (newComment) => {
        setComments([...comments, newComment]);
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
                            <img src={profileImg} />
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
                        <CommentForm post_id={post.id} commentAdd={handleCommentAdd}/>
                    </div>
                ) : (
                    <div>게시글을 찾을 수 없습니다.</div>
                )}
            </div>
        </div>
    );
}

export default PostPage;
