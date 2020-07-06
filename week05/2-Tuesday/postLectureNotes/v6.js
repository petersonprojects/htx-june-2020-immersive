<<<<<<< HEAD
// powerful tool for reproducing stateful code

class Button
{
    //cannot use arrow method for constructor
    constructor(domElement, bgColor, text) 
    {
=======


class Button {

    constructor(domElement, bgColor, text) {
       
>>>>>>> 95d847ef6ce4cccb7a543d24562b54b7322dc952
        this.state = {
            domElement: domElement,
            bgColor: bgColor,
            text: text,
            count: 0
        }
<<<<<<< HEAD
    }

    // u can use arrow methods for prototpyes tho
    createButton = () => {
        let button = document.createElement('button');

        button.textContent = this.state.text;
        button.style.backgroundColor = this.state.bgColor;

        button.addEventListener('click', ()=>{
            this.state.count += 1;
            button.textContent = `${this.state.text} ${this.state.count}`
        })
        this.state.domElement.appendChild(button);
    }

    render()
    {
        this.createButton();
    }
=======
        
    }


    createButton = () => {

        let button = document.createElement('button');

        button.textContent = this.state.text;

        button.style.backgroundColor = this.state.bgColor;

        button.addEventListener('click', ()=>{

            this.state.count += 1;
            button.textContent = `${this.state.text} ${this.state.count}`
        })

        this.state.domElement.appendChild(button);
      
    }


    render(){

        this.createButton();
        
    }
    

>>>>>>> 95d847ef6ce4cccb7a543d24562b54b7322dc952
}