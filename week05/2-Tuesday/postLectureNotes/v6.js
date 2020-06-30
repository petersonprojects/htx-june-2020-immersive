// powerful tool for reproducing stateful code

class Button
{
    //cannot use arrow method for constructor
    constructor(domElement, bgColor, text) 
    {
        this.state = {
            domElement: domElement,
            bgColor: bgColor,
            text: text,
            count: 0
        }
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
}