import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './style/App.css'
import SearchPage from "./pages/SearchPage"
import JobOpeningPage from './pages/JobOpeningPage'
import JobSearchPage from './pages/JobSearchPage'
import MainPage from './pages/MainPage'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import JobDetailPage from './pages/JobDetailPage' // 새로 추가된 페이지
import NewPostPage from './pages/NewPostPage'
import NursingApplicationPage from './pages/NursingApplicationPage'
import NursingApplicationAcceptPage from './pages/NursingApplicationAcceptPage'
import NursingPage from './pages/NursingPage'

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='app'>
      <Router>
        <div className='app'>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/jobOpening" element={<JobOpeningPage/>} />
            <Route path="/jobSearch" element={<JobSearchPage/>} />
            <Route path='/login/*' element={<LogInPage/>}/>
            <Route path='/signup/*' element={<SignUpPage/>}/>
            <Route path='/user/*' element={<UserPage/>}/>
            <Route path='/jobOpening/post' element={<PostPage/>}/>
            <Route path='/job/:id' element={<JobDetailPage/>}/> {/* 상세 정보 페이지 경로 추가 */}
            <Route path="/jobOpening/newPost" element={<NewPostPage/>}/>
            <Route path="/application" element={<NursingApplicationPage/>}/>
            <Route path="/accept" element={<NursingApplicationAcceptPage/>}/>
            <Route path="/nurseProfile" element={<NursingPage/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
