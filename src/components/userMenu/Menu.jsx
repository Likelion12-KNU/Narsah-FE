import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/Menu.css";

function Menu({code}) {
    return (
        <div className='userMenu'>
            <div className='userMenu'>
                <ul className='accountSetting'>
                    <li><Link to="/user/password">비밀번호 변경</Link></li>
                    <li><Link to="/user/name">닉네임 변경</Link></li>
                    <li><Link to="/user/pay">결제수단 관리</Link></li>
                </ul>
                {code === 0 ? (
                    <ul className='serviceMenu'>
                        <li><Link to="/user/profile">환자 프로필</Link></li>
                        <li><Link to="/user/list">간병 내역</Link></li>
                        <li><Link to="/user/recent">최근 간병인</Link></li>
                        <li><Link to="/user/myReview">내가 쓴 리뷰</Link></li>
                        <li><Link to="/user/myPost">내가 쓴 글</Link></li>
                        <li><Link to="/user/myComments">내가 쓴 댓글</Link></li>
                    </ul>
                ) : (
                    <ul className='serviceMenu'>
                        <li><Link to="/user/profile">내 프로필</Link></li>
                        <li><Link to="/user/receivedApp">받은 신청</Link></li>
                        <li><Link to="/user/sentApp">보낸 신청</Link></li>
                        <li><Link to="/user/receivedReview">받은 리뷰</Link></li>
                        <li><Link to="/user/myComments">내가 쓴 댓글</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Menu;
