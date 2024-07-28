import React from 'react';
import Bar from '../components/Bar';
import UserProfile from '../components/UserProfile';
import "../style/UserPage.css"

function UserPage() {
    let name = "홍길동";
    let userId = "gildong123";
    let code = 1;   // dummy

    return (
        <div className='userPage'>
            <Bar />
            <div className='content'>
                <UserProfile name={name} userid={userId} code={code} />

                <div className='userMenu'>
                    <ul className='accountSetting'>
                        <li>비밀번호 변경</li>
                        <li>닉네임 변경</li>
                        <li>결제수단 관리</li>
                    </ul>
                    {code === 0 ? (
                        <ul className='serviceMenu'>
                            <li>환자 프로필</li>
                            <li>간병 내역</li>
                            <li>최근 간병인</li>
                            <li>내가 쓴 리뷰</li>
                            <li>내가 쓴 글</li>
                            <li>내가 쓴 댓글</li>
                        </ul>
                    ) : (
                        <ul className='serviceMenu'>
                            <li>내 프로필</li>
                            <li>받은 신청</li>
                            <li>보낸 신청</li>
                            <li>받은 리뷰</li>
                            <li>내가 쓴 댓글</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserPage;