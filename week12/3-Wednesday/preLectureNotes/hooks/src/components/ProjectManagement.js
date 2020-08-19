
import React, {useState, useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';
import AddProject from './AddProject';
import Project from './Project';

const ProjectManagement = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        
        let projectArr = [

            {
                id: uuidv1(),
                title: "Javascript",
                category: 'Front-End'
            },
            {
                id: uuidv1(),
                title: "Node",
                category: 'Back-End'
            },
            {
                id: uuidv1(),
                title: "React",
                category: 'Front-End'
            }
        ]

        setProjects(projectArr)


        
        

    }, [])


    let addProject = (project) => {
      
        let newArray = [...projects, project]
        setProjects(newArray)

    }

    let deleteProject = (id) => {

        let oldProjects = [...projects];

        let index = oldProjects.findIndex(o => id === o.id)

        oldProjects.splice(index, 1);

        setProjects(oldProjects);

      
    }
    
    

  return (
    <>
        <AddProject addProject={addProject} />
        <Project projects={projects} onDelete={deleteProject} />

        
    </>
  )
}

export default ProjectManagement
