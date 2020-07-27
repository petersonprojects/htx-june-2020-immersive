var addButton = document.getElementById('addButton');
var addInput = document.getElementById('itemInput');
var todoList = document.getElementById('todoList');
var listArray = [];



(()=>{
    //fetch to api to get all todos


})()

addButton.addEventListener('click', (e)=>{
    //add a todo item to the list
    
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
