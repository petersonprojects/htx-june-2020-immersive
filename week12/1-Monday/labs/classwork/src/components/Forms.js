import React, { Component } from 'react';

class Forms extends Component {

    constructor()
    {
        super();

        this.state = {
            textValue: "",
            isValid: false,
            selectValue: ""
        }
    }

    handleForm = (e) =>
    {
        e.preventDefault();
        console.log("Form was submitted");
    }

    handleChange = (e) =>
    {

        let targetType = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        // this ternery statement is the same as below
        // if(e.target.targetType == 'checkbox')
        // {
        //     targetType = "checkbox"
        // }
        // else
        // {
        //     targetType = e.target.value
        // }

        let name = e.target.name; //isValid or textValue

        this.setState({
            [name]: targetType
        }, ()=> {
            console.log(this.state)
        })

    }

    render()
    {

        return (
            <>

            <h1>React Forms</h1>

            <form onSubmit={this.handleForm}>

                <input name="textValue" type="text" onChange={(e)=>this.handleChange(e)}/>

                <input name="isValid" type="checkbox" checked={this.state.isValid} onChange={this.handleChange}/>

                <select name="selectValue" onChange={this.handleChange}>

                    <option value="Houston">Houston</option>
                    <option value="New York">New York</option>
                    <option value="Atlanta">Atlanta</option>
                    <option value="Detriot">Detroit</option>
                    <option value="Seattle">Seattle</option>

                </select>

                <button className="ml-1" type="submit">Submit</button>

            </form>

            {this.state.textValue}

            </>
        )
    }
}

export default Forms
