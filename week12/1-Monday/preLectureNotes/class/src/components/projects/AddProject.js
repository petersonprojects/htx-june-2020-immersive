import React, { Component } from 'react'
import {Form, Col} from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';

class AddProject extends Component {


    handleSubmit = (e) =>{

        e.preventDefault();

        let project = {
            id: uuidv1(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }

        this.props.addProject(project)
    }

    render() {
        return (
            <>
                Add Project


                <form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Col>
                            <input ref="title" type="text" placeholder="Title"/>
                        </Col>
                    </Form.Group>

                    
                    <Form.Group>
                        <select ref="category">
                            <option>Front-End</option>
                            <option>Back-End</option>
                        </select>
                    </Form.Group>
                    
                    <input type="submit" className="buttonStyle" value="submit"/>
                </form>
            </>
        )
    }
}

export default AddProject
