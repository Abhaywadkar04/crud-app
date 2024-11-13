import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import AddUser from '../components/AddUser'
import NavBar from '../components/NavBar'
import AllUser from '../components/AllUser'
import CodeForInterview from '../components/CodeForInterview'
import EditUser from '../components/editUser'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/add' element={<AddUser />} />
        <Route path='/all' element={<AllUser />} />
        <Route path='/' element={<CodeForInterview />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

