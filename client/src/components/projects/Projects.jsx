import React, {useContext, useEffect}from 'react'
import Bar from '../layout/Bar'
import Sidebar from '../layout/Sidebar'
import FormTask from '../tasks/FormTask'
import ListTask from '../tasks/ListTask'
import AuthContext from '../../context/auth/authContext'
import Footer from '../layout/Footer'

const Projects = () => {
    const authToken = useContext(AuthContext)
    const {userAuth} = authToken

    useEffect(() => {
        userAuth()
    }, [])

    return (
        <div className="contenedor-app">
           <Sidebar />
            <div className="seccion-principal">
                <div>
                    <Bar />
                    <FormTask />
                </div>
                <main>
                    <div className="contenedor-tareas">
                        <ListTask />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Projects
