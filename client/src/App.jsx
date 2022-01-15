import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './components/auth/Auth'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects/Projects'
import AlertState from './context/alerts/alertState'
import ProjectState from './context/projects/projectState'
import TareaState from './context/Tasks/taskState'
import AuthState from './context/auth/authState'
import tokenAuth from './config/tokenAuth'
import PrivateRoutes from './components/routes/PrivateRoutes'

function App() {

  const token = localStorage.getItem('token')
  if(token){
    tokenAuth(token)
  }

  return (
    <ProjectState>
      <TareaState>
        <AuthState>
          <AlertState>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/new-account' element={<NewAccount />} />
                <Route path='/projects' element={
                  <PrivateRoutes>
                    <Projects />
                  </PrivateRoutes>
                  }
                />
              </Routes>
            </BrowserRouter>
          </AlertState>
        </AuthState>
      </TareaState>
    </ProjectState>
  )
}

export default App
