
class Button {

    constructor(node, color, text) {

        this.state= {
            node: node,
            color:color,
            text:text,
            count:0
        }
        
    }

    createButton(){
        
        var button = document.createElement('button');
        button.textContent = "Hello " + this.state.count.toString();
    
        button.addEventListener('click', ()=>{
            this.state.count += 1;
            console.log(this.count);
            console.log("hello");
            button.textContent = "Hello " + this.state.count.toString();

        })

        this.state.node.appendChild(button);
        
    }

    render(){

        this.createButton();   
    }
}