import React from 'react'
import Project from './Project'

const ListadoProyectos = () => {

    const proyectos = [
        {name: 'Tienda Virtual' },
        {name: 'Intranet'},
        {name: 'Diseño Sitio Web'},
    ]

    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => <Project key={proyecto.name} proyecto={proyecto} />)}
        </ul>
    )
}

export default ListadoProyectos
