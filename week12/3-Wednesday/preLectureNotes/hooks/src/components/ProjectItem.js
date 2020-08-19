import React from 'react'

const ProjectItem = ({project, onDelete}) => {
    return (
        <>
            {project.title} {project.category} 
            <button onClick={onDelete}>X</button>
            <br/>
        </>
    )
}

export default ProjectItem
