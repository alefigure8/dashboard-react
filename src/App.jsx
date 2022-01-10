import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './components/auth/Auth'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects/Projects'

function App() {


  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/new-account' element={<NewAccount />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
