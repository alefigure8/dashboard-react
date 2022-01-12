import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './components/auth/Auth'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects/Projects'
import ProjectState from './context/projects/projectState'
import TareaState from './context/Tasks/taskState'

function App() {


  return (
    <ProjectState>
      <TareaState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/new-account' element={<NewAccount />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </TareaState>
    </ProjectState>
  )
}

export default App
