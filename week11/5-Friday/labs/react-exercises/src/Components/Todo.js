import React, { Component } from 'react';
import '../App.css';

class Todo extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <>
                <div className="App">

                    <div className="todo-form">

                        <input type="text"/>

                        <button>Add Task</button>

                        <br/>

                        <ul>

                        </ul>

                    </div>

                </div>
            </>
        )
    }
}

export default Todo
