var addButton = document.getElementById('addButton');
var addInput = document.getElementById('itemInput');
var todoList = document.getElementById('todoList');
var listArray = [];

//

(()=>{
    fetch('/api')
    .then(result => result.json())
    .then(data =>{
        console.log(data);

        data.forEach(todo =>{
            todoList.innerHTML += createItemDom(todo.description, todo.id);
        })
    })
})()



addButton.addEventListener('click', (e)=>{
    //add a todo item to the list
    
    console.log(`button clicked ${addInput.value}`);

    fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            description: addInput.value
        })
    })
    .then(response => response.json())
    .then(data =>{
        console.log(`input value : ${document.getElementById('itemInput').value}`);
        console.log(data);
        //get the new list and update the items
        todoList.innerHTML ="";
        data.forEach(todo =>{
            todoList.innerHTML += createItemDom(todo.description, todo.id);
        })

    })
    .catch(error =>{
        console.log(error);
    })

    

})

todoList.addEventListener('click', (e)=>{

    console.log(e);

    if(e.target.tagName == "BUTTON"){
        console.log(`clicked button`);
    
        let id = e.target.id
            console.log(id);
        fetch('/api/' + id.toString(), {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
            
        })
        .then(response => response.json())
        .then(data =>{
            console.log(`input value : ${document.getElementById('itemInput').value}`);
            console.log(data);
            //get the new list and update the items
            todoList.innerHTML ="";
            data.forEach(todo =>{
                todoList.innerHTML += createItemDom(todo.description, todo.id);
            })
    
        })
        .catch(error =>{
            console.log(error);
        })
    }
})

//function to change the dom of the list of todo list
var createItemDom =  (description, id) => {

    let listItem = `<li>
    <label>${description}</label>

        <button id="${id.toString()}" class="btn btn-success">Update</button>
        <button id="${id.toString()}" class="btn btn-danger">Delete</button>
    </li>`

    return listItem;
}
