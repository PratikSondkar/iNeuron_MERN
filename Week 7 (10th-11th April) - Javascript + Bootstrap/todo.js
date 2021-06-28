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
   
   for(var val of form.values()){           //form.entries, form.values, form.keys - Just like dictionaries.
       console.log(form.get(val));
   }

   var formValues = {};

   for(var key of form.keys()){
       //console.log(key)
       console.log(form.get(key))

       formValues[key] = form.get(key)
   }
   console.log(formValues)
});

/*
function makeItem(title,description,status) {
    const outerRow = document.createElement('div');
    outerRow.classList.add(['row','jumbotron','section']);

    const innerRow = document.createElement('div');
    innerRow.classList.add(['col-md-2']);
    innerRow.textContent = title;

    outerRow.appendChild(innerRow); 
    //- This means
    //<div class="row jumbotron section">
        //<div class="col-md-2"></div>
    //</div> - one way of doing it.
    
 }*/ 
// This is one way in which JS will automatically create html for us/