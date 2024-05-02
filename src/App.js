import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './Components/Register'
import Login from "./Components/Login"
import UserProfile from './pages/UserProfile'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/register' element={<Register/> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='user-profile' element={ <UserProfile />} />
        <Route path='/main-page' element={<MainPage /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App