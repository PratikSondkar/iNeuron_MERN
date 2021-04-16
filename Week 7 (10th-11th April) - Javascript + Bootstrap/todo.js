//This is one way to grab elements.

// const titlefield = document.querySelector('#title');
// const butn = document.querySelector('#btn');

// butn.addEventListener('click',function(){
//     console.log(titlefield.value);
// });

const todoform = document.querySelector('#todoForm');
const butn = document.querySelector('#btn');

butn.addEventListener('click',function(){
   const form = new FormData(todoform);
   
   for(var val of form.values()){
       console.log(form.get(val));
   }
});

// function makeItem(title,description,status) {
//     const outerRow = document.createElement('div');
//     outerRow.classList.add(['row','jumbotron','section']);

//     const titleDiv = document.createElement('div');
//     innerRow.classList.add(['col-md-2']);
//     titleDiv.textContent = title;

//     outerRow.appendChild(titleDiv); - This means
    // <div class="row jumbotron section">
    //     <div class="col-md-2"></div>
    // </div> - one way of doing it.
    
// } 
// This is one way in which JS will automatically create html for us/