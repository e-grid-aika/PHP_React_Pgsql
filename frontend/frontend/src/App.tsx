import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'

// import './App.css'
import { Home } from './Home'
import { PCTable } from './components/PCTable'
import { PCInputForm } from './components/PCInputForm'
import InputForm from './components/InputForm'
import UserInfo from './components/userInfo'

export function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pcListTable">PC一覧</Link>
            </li>
            <li>
              <Link to="/pcInputForm">登録フォーム</Link>
            </li>
            <li>
              <Link to="/inputForm">ユーザー登録フォーム</Link>
            </li>
            <li>
              <Link to="/userInfo">ユーザー情報</Link>
            </li>
          </ul>
        </div>
        {/* <Router /> */}
        <br />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pcListTable" element={<PCTable/>} />
          <Route path="/pcInputForm" element={<PCInputForm/>} />
          <Route path="/inputForm" element={<InputForm/>} />
          <Route path="/userInfo" element={<UserInfo/>} />
        </Routes>


      </BrowserRouter>
    </>
  )
}