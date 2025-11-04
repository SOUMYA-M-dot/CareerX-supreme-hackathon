import { Route, Routes } from 'react-router-dom'
import Career from '../pages/Career'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Community from '../pages/Community'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default MainRoutes