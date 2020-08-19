
import React from 'react';
import { v1 as uuidv1 } from 'uuid';

const AddProject = (props) => {


  let handleSubmit = (e) => {

    e.preventDefault();

    props.addProject({
        id: uuidv1(), 
        title: e.target.title.value,
        category: e.target.category.value
    })
    
  }
  
  return (
    <>
      
      <form onSubmit={handleSubmit}>

          <input type="text" id="title"/>

          <select id="category">
                <option value="Front-End">Front End</option>
                <option value="Back-End">Back End</option>
          </select>

          <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddProject
