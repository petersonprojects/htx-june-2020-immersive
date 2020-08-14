
import React, { Component } from 'react'
import '../App.css';

class Todo extends Component {

    
    render() {

        return (
            <div className="App">

                <div className="todo-form">

                    <input type="text"/>

                    <button>Add Task</button>

                    <br />

                    <ul>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo
