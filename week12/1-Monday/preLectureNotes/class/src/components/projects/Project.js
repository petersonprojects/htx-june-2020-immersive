
import React from 'react'
import ProjectItem from './ProjectItem';


//show a list of project items
const Project = (props) => {

    let projectsArr = props.projects.map(project =>{
        return <ProjectItem key={project.id}  proj={project} onDelete={props.onDelete} /> 
    })

    return (
        <>
            Project

            {projectsArr}
        </>
    )
}

export default Project
