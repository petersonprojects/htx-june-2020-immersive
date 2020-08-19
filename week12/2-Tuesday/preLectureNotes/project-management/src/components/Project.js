import React from 'react'
import ProjectItem from './ProjectItem'


const Project = ({projects, onDelete}) => {

    let projTitles = projects.map(project =>{
        return <ProjectItem project={project} onDelete={onDelete}/>
    })
    
    return (
        <>
            <h1>Project</h1>

            {projTitles}
        </>
    )
}

export default Project
