import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([
    {
      username: "Mani",
      password: "123"
    }
  ])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} />} />
        <Route path='/signup' element={<Signup users={users} setUsers={setUsers} />} />
        <Route path='/landing' element={<Landing users={users} />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App