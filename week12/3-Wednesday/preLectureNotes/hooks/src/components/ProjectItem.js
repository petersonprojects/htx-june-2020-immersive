

import React from 'react'

const ProjectItem = ({project, onDelete}) => {
  return (
    <>
      {project.title} {project.category}  |  

      <a href="#" onClick={()=> onDelete(project.id)} >X</a>  <br /> 
    </>
  )
}

export default ProjectItem
