
var addButton = document.getElementById('addButton');

var todos = document.getElementById('todoList');

// description of what is going to be added/posted .value .val() in JQuery
var itemInput = document.getElementById('itemInput');

//self invoking function
(()=>{
    
    fetch('/api')
    .then(results => results.json())
    .then((data)=>{
        let html = "";

        data.forEach(todo => {
            html += createItemDom(todo.description, todo.id)
        });

        todos.innerHTML = html;
    })

})()

addButton.addEventListener('click', (e)=>{

    fetch('/api', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            description: itemInput.value
        })
    })
    .then(results => results.json()) //intermediate step required in pure JS
    .then(data=>{
        // data is all the todos records
        // now update the dom with all todos including the new one
        let html = "";

        data.forEach(todo => {
            html += createItemDom(todo.description, todo.id)
        });

        todos.innerHTML = html;

        itemInput.value = "";
    });

});


//function to change the dom of the list of todo list
var createItemDom = (description, id) => {

    let listItem = `<li>
    <label>${description}</label>

        <button id="${id.toString()}" class="btn btn-success">Update</button>
        <button id="${id.toString()}" class="btn btn-danger">Delete</button>
    </li>`

    return listItem;
}