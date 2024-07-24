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
            <Route path='/login' element={<LogInPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/user' element={<UserPage/>}/>
          </Routes>
          </div>
      </Router>
    </div>
  )
}

export default App
