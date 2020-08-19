import React, { Component } from 'react'
import { v1 as uuidv1 } from 'uuid';

class AddProject extends Component {

    handleSubmit = (e) => {
        
        e.preventDefault();

        let project = {
            id: uuidv1(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }

        this.props.addProject(project)
        //this.handleAddProject(project)

        //this.refs.name.value

        


    }

    render() {
        return (
            <>
                <h1>Add Project</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="title" placeholder="title"></input>

                    <select ref="category">
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                    </select>
                    <input type="submit" className="buttonstyle" value="submit" />
                </form>
            </>
        )
    }
}

export default AddProject
