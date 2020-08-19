import React from 'react';
import ProjectItem from './ProjectItem'

const Project = ({projects, onDelete}) => {
    return (
        <>
            {
                projects.map(p => {
                    return <ProjectItem key={p.id} project={p} onDelete={onDelete}/>;
                })
            }
        </>
    )
}

export default Project
