import React from 'react'

const ProjectItem = ({ project, onDelete }) => {

    let handleDelete = () =>{

        onDelete(project.id)
    }

    return (
        <>
            {project.title}
            {project.category}
            <a href="#" onClick={handleDelete}>X</a>
            <br />
        </>
    )
}


export default ProjectItem
