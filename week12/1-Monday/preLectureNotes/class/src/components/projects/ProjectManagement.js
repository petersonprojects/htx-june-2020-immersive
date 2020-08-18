
import React, { Component } from 'react'
import AddProject from './AddProject';
import { v1 as uuidv1 } from 'uuid';
import Project from './Project';

class ProjectManagement extends Component {

    constructor() {
        super();

        this.state = {
            projects: []
        }
    }

    componentDidMount = () =>{

        this.setState({
            projects: [
                {
                    id: uuidv1(),
                    category: "Front-End",
                    title: "Javascript"
                },
                {
                    id: uuidv1(),
                    category: "Back-End",
                    title: "Node"
                },
                {
                    id: uuidv1(),
                    category: "Front-End",
                    title: "React"
                }

            ]
        })
    }


    handleAddProject = (newProject) => {
        
        let oldProjects = [...this.state.projects];

        oldProjects.push(newProject);

        this.setState({
            projects: oldProjects
        })

    }

    handleDeleteProject = (id)=>{

        let oldProjects = [...this.state.projects];

        let index = oldProjects.findIndex(pObj =>{

            return pObj.id === id
        })

        oldProjects.splice(index, 1)

        this.setState({
            projects: oldProjects
        })


    }
    
    //(project) => this.handleAddProject(project)

    render() {

        //console.log(uuidv1())
        return (
            <>
                Project Management

                <AddProject addProject={(project) => this.handleAddProject(project)} />


                <Project projects={this.state.projects} onDelete={(id)=> this.handleDeleteProject(id)} />

            </>
        )
    }
}

export default ProjectManagement
