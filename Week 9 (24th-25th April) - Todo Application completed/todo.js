// 1. This is one way to grab elements.

/*  const titlefield = document.querySelector('#title');
 const butn = document.querySelector('#btn');

 butn.addEventListener('click',function(){
     console.log(titlefield.value);
 });
 */
/* const todos = [
  {
    title: "Meeting",
    description: "There will be a meeting at 6pm Today",
    createdAt: new Date().toString(),
    status: "Active",
  },  {
    title: "Lunch",
    description: "Lunch at 1 pm",
    createdAt: new Date().toString(),
    status: "Active",
  },
]; */

//This is all imperative coding. Before moving to React we need
//to know base of JS.

/* 
Ex: var arr = [1,2,3,4,5]

//Imperative

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//This is how forEach loop works in the back
Array.prototype.forEach = function(calllback){
    for(var i=0;i<this.length;i++){
        calllback(this[i])
    }
}

//Declarative 
arr.forEach(function(val){
    console.log(val);
}); */

// ---------------------------------------------------------------------

//let data = localStorage.getItem('todos');

//let todos = JSON.parse(data); // Data stored local storage in JSON format need to be parsed.

// @GET https://localhost:3005/todos -get data from server
// @POST https://localhost:3005/todos {} -put data onto the server
// @PATCH https://localhost:3005/todos/1 {} -update data without overwriting wholedata
// @PUT https://localhost:3005/todos/1  -update data with overwriting all data
// @DELETE https://localhost:3005/todos/1 -delete data


let todos = [];
let isEdit = false;
let editid = null;

const todoform = document.querySelector("#todoForm");
const butn = document.querySelector("#btn");
const todo_list = document.querySelector(".todo_list");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

// When the user clicks on add todo button
//------------------------------------------------------------------

butn.addEventListener("click", function () {
  const form = new FormData(todoform);
  var formValues = {};

  /*   for (var val of form.values()) {
    console.log(form.get(val));
} */

  for (var val of form.keys()) {
    formValues[val] = form.get(val);

    /*6. I want to make whatever value there is in val as my key in the
    object formValues. Hence for first iteration val = title and my
    formValues will become {title: 'meeting'} that is whatever inserted by
    user in title field. */
  }

  if (!isEdit) {
    //add functionality

    /* Now let's create an empty todos array and simply take above values and 
        insert in that array. */
    /* var todo = {
            title : formValues.title,
            description : formValues.description,
            createdAt : new Date().toString(),
            status: 'Active'
        }; */
    var todo = getTodo(formValues.title, formValues.description);

    //todos.push(todo); OR immutable way
    todos = [...todos, todo]
  } else {
    //edit functionality

    var newTodos = [...todos];
    var idx = newTodos.findIndex((t) => t.id == editid);
    t = { ...newTodos[idx] };
    t.title = formValues.title;
    t.description = formValues.description;
    newTodos[idx] = t;
    releaseEditLock();

    todos = newTodos;
  }
  // Clearing the textbox for next time.
  title.value = null;
  description.value = null;

 // persistTodos(todos);
  
  render(todos);
});
//This function will store data in local storage
/* function persistTodos(todos){

    localStorage.setItem('todos',JSON.stringify(todos)); // To store in browser  if we do (todos, todos) we will gte [object object] in browser local storage.
}
 */
//This function will get us into the edit mode for that particular todo

function editLock(id) {
  editid = id;
  isEdit = true;
  butn.textContent = "Save";
}

//This dunction will get us out of edit mode
function releaseEditLock() {
  editid = null;
  isEdit = false;
  btn.textContent = "Add Todo";
}
//-----------------------------------------------------------------------------------

//Gives us a new todo item everytime
//-------------------------------------------------------------------

function getTodo(title, description) {
  //We can extract the last element and get out it's id
  // And id+1 will be our new id.
  var id;

  if (todos.length == 0) id = 1;
  else {
    var last = todos[todos.length-1];
    id = last.id + 1;
  }

  return {
    // title:title, This can be written as only title.JS will automatically understand this
    id,
    title,
    description,
    createdAt: new Date().toString(),
    status: "Active",
  };
}

//--------------------------------------------------------------------
/*2. function makeItem(title,description,status) {
     const outerRow = document.createElement('div');
     outerRow.classList.add(['row','jumbotron','section']);

     const titleDiv = document.createElement('div');
     innerRow.classList.add(['col-md-2']);
     titleDiv.textContent = title;

     outerRow.appendChild(titleDiv); - This means
 <div class="row jumbotron section">
     <div class="col-md-2"></div>
 </div> - one way of doing it.

 This is one way in which JS will automatically create html for us
 } */

//------------------------------------------------------------------------

/*3. This function creates all the HTML of todos for us. It will make
 one main div and append everything inside it. This will be anything
 div or button or anything else.*/

/*4. function render() {
    const mainRow = document.createElement("div");
    mainRow.className = "row jumbotron section";

   const titlediv = document.createElement("div");
   const descriptiondiv = document.createElement("div");
   const statusdiv = document.createElement("div");

   titlediv.className = "col-md-2";
   titlediv.textContent = "Meeting";
   descriptiondiv.className = "col-md-2";
   descriptiondiv.textContent = "Meeting at 6 pm today";
   statusdiv.className = "col-md-2";
   statusdiv.textContent = "Active";

   let markCompleteddiv = document.createElement("div");
   markCompleteddiv.className = "col-md-2";

   let statusBtn = document.createElement("button");
   statusBtn.className = "btn btn-info";
   statusBtn.textContent = "Mark Completed";

   markCompleteddiv.appendChild(statusBtn);

   const actiondiv = document.createElement('div');
   actiondiv.className = 'col-md-4';

   const row = document.createElement('div');
   row.className = 'row';

   let editdiv = document.createElement("div");
   editdiv.className = "col-md-3";

   statusBtn = document.createElement("button");
   statusBtn.className = "btn btn-primary";
   statusBtn.textContent = "Edit";

   editdiv.appendChild(statusBtn)
   row.appendChild(editdiv)


   let statusAction = document.createElement("div");
   statusAction.className = "col-md-3";

   statusBtn = document.createElement("button");
   statusBtn.className = "btn btn-danger";
   statusBtn.textContent = "Delete";

   statusAction.appendChild(statusBtn)
   row.appendChild(statusAction)

   actiondiv.appendChild(row);

   mainRow.appendChild(titlediv);
   mainRow.appendChild(descriptiondiv);
   mainRow.appendChild(statusdiv);
   mainRow.appendChild(markCompleteddiv);
   mainRow.appendChild(actiondiv);

    Here we appended our todos into the container
   container.appendChild(mainRow);

 } */

//------------------------------------------------------------------------

//This function renders the todo list to the browser
//--------------------------------------------------------------------------

function render(todos) {
  const items = todos.map((todo) => renderATodoItem(todo));

  const todo_list = document.querySelector(".todo_list");

  /*     Before appending we must clear previous screen
   */
  todo_list.innerHTML = null;

  items.forEach((item) => {
    todo_list.appendChild(item);
  });

  /* Here the renderAtTodoitem function is called and passed the 
     object from todos list. This will go to the function and 
    return all the title, description and status and store it
    inside the items variable. */
}
/*   Hence we got the todos list through JS not through HTML
 The code will not be available in HTML. */

//--------------------------------------------------------------------------

/* 5. As we have creaed a list manually above now we will pass the
 todo list that we have already stored inside an object.
 */

//This function renders/ makes an html code for making todo item in list
//-----------------------------------------------------------------

function renderATodoItem(todo) {
  const mainRow = document.createElement("div");
  mainRow.className = "row jumbotron section";

  const titlediv = document.createElement("div");
  const descriptiondiv = document.createElement("div");
  const statusdiv = document.createElement("div");

  titlediv.className = "col-md-2";
  titlediv.textContent = todo.title;
  descriptiondiv.className = "col-md-2";
  descriptiondiv.textContent = todo.description;
  statusdiv.className = "col-md-2";
  statusdiv.textContent = todo.status;

  let markCompleteddiv = document.createElement("div");
  markCompleteddiv.className = "col-md-2";

  let statusBtn = document.createElement("button");
  statusBtn.className = "btn btn-info";
  statusBtn.textContent = "Mark Completed";

  // This is when user clicks Mark cmpleted button.

  statusBtn.addEventListener("click", function () {
    /* Task 2 find out todo from
        list of todos whose id is todo.id(find)
        change status and call render function */

    //Mutable way

    /* var t = todos.find(t => t.id == todo.id)  // This is like function(t){ return t.id == todo.id }
        t.status = 'Completed';
        render(todos); */

    //Immutable way

    // var newTodos = todos.slice(); //It will give all elements of array OR
    var newTodos = [...todos]; //Another way

    var idx = newTodos.findIndex((t) => t.id == todo.id);
    var t = { ...newTodos[idx] }; // Copy of the todo made as it is object copy we use {}
    t.status = "Completed";
    newTodos[idx] = t;

    todos = newTodos;
    //persistTodos(todos);
    render(newTodos);
  });

  markCompleteddiv.appendChild(statusBtn);

  const actiondiv = document.createElement("div");
  actiondiv.className = "col-md-4";

  const row = document.createElement("div");
  row.className = "row";

  let editdiv = document.createElement("div");
  editdiv.className = "col-md-3";

  statusBtn = document.createElement("button");
  statusBtn.className = "btn btn-primary";
  statusBtn.textContent = "Edit";

  statusBtn.addEventListener("click", function () {
    title.value = todo.title;
    description.value = todo.description;

    editLock(todo.id);
  });

  editdiv.appendChild(statusBtn);
  row.appendChild(editdiv);

  let statusAction = document.createElement("div");
  statusAction.className = "col-md-3";

  statusBtn = document.createElement("button");
  statusBtn.className = "btn btn-danger";
  statusBtn.textContent = "Delete";

  //This is when user clicks Delete button
  statusBtn.addEventListener("click", () => {
    //Task 3
    // remove todo from todos whose id is todo.id (filter)

    //Imuutable way
    var newTodos = todos.filter((t) => t.id != todo.id); //filter function return new array itself. Here we filtered the item from todo list
    // which matches the condition. That means we have deleted that item. Hence it is not
    //present and above condition turns true.
    todos = newTodos;
    //persistTodos(todos);
    render(newTodos);
  });

  statusAction.appendChild(statusBtn);
  row.appendChild(statusAction);

  actiondiv.appendChild(row);

  mainRow.appendChild(titlediv);
  mainRow.appendChild(descriptiondiv);
  mainRow.appendChild(statusdiv);
  mainRow.appendChild(markCompleteddiv);
  mainRow.appendChild(actiondiv);

  return mainRow; /* This gave us a single todo item. And we
                    returned it back.*/
}
//------------------------------------------------------------------------------
