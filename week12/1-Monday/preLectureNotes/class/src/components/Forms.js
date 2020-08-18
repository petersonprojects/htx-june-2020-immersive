import React, { Component } from 'react'

class Forms extends Component {


    constructor() {
        super();
        this.state = {
            textValue: "",
            isValid: true,
            selectValue: ""
        }



        // this.handleForm = this.handleForm.bind(this);

    }


    handleForm = (e) => {

        e.preventDefault();
        console.log("form was submitted");
    }

    handleChange = (e) => {
        //e.target.value

        // console.log(e.target.value)

        //console.log(e.target.checked)

        // if (e.target.type == 'checkbox') {
        //     targetType = e.target.checkbox
        // }
        // else {
        //     targetType = e.target.value
        // }

        let targetType = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        // N

        let name = e.target.name; //isValid textValue

        this.setState({
            [name]: targetType
        }, () => {
            console.log(this.state)
        })

        //   this.setState({
        //       textValue: e.target.value
        //   })
    }

    // handleCheck = (e) => {
    //   //e.target.checked
    //     this.setState({
    //         isValid: e.target.checked
    //     }, ()=>{

    //         console.log(this.state.isValid)
    //     })

    // }


    //(todoID) => this.handleChange(todoID)


    render() {
        return (
            <>
                <h1>React Forms</h1>

                <form onSubmit={this.handleForm}>

                    <input name="textValue" type="text" onChange={this.handleChange} />
                    {this.state.textValue}

                    <input name="isValid" type="checkbox" checked={this.state.isValid} onChange={this.handleChange} />


                    <select name="selectValue" onChange={this.handleChange}>
                        <option value="NewYork">New York</option>
                        <option value="Houston">Houston</option>
                        <option value="Atlanta">Atlanta</option>
                        <option value="Seattle">Seattle</option>
                        <option value="Detroit">Detroit</option>
                    </select>
                    <button>Submit</button>
                </form>

            </>
        )
    }
}

export default Forms
