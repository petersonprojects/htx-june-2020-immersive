import React, { Component } from 'react'
import Project from './Project';
import AddProject from './AddProject';
import { v1 as uuidv1 } from 'uuid';


class ProjectManagement extends Component {

    constructor() {
        super()

        this.state = {
            projects: []
        }
    }

    

    componentDidMount = () => {
        this.setState({
            projects: [

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
        })
    }

    handleDeleteProject = (id) =>{
        let oldProject = [...this.state.projects];

        let index = oldProject.findIndex(obj =>{
            return obj.id == id
        })

        oldProject.splice(index, 1);

        this.setState({
            projects: oldProject
        })
    }

    handleAddProject = (project) => {
        
        let oldProjects = [...this.state.projects]

        oldProjects.push(project)

        this.setState({
            projects: oldProjects
        })

    }


    render() {
        console.log(this.state.projects);

        return (
            <>
                
                <Project projects={this.state.projects} onDelete={this.handleDeleteProject} />

                
                <AddProject addProject={this.handleAddProject}/>
                    
            </>
        )
    }
}

export default ProjectManagement
