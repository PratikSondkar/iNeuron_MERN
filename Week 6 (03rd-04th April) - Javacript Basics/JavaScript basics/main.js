var label = ["Maths", "Physics", "Chemistry", "Biology", "History", "Geo","English"];
var arr = [78,55,45,68,86,58,70];

var len = label.length;

// ------------------------------- find ----------------------------------------- 

var value = 55;
var found = arr.find(function find_num(num){ //normal function
    return value == num;
    
});

if(value){
    console.log("Value",found,"is present");
}
else{
    console.log("Value is not present");
}

// -------------------------------- findIndex ---------------------------------------

var found_index = arr.findIndex( num => value == num);  // modified functions. If there is single element we can 
                                                        // remove the round, curly braces and return also.
                                                        // If multiple statements before return the curly brackets stay.

if(value){
    console.log("Value is present at index",found_index);
}
else{
    console.log("Value is not present");
}

// ------------------------------------ map ---------------------------------------

// //Used to keep the original array value wihtout changing the original array.
// //Creates a new array keeping original intact and mapping the original values to the new updated values.

// E.g - 1
var numbers = [2,4,6,8,10,12];
var sqrs = numbers.map(function squares(num){
    return num*num;
});

console.log("Squares:",sqrs);

//E.g - 2
var persons = [
    {firstname : "Keshav", lastname: "Singh"},
    {firstname : "Sudhanshu", lastname: "Kumar"},
    {firstname : "Krish", lastname: "Naik"}
  ];

  var full_name = persons.map(item => [item.firstname,item.lastname].join(' ')); //modified function

  console.log("Full name:",full_name);


// ------------------------------------------ filter ----------------------------------------

//The filter() method creates an array filled with all array elements that 
//pass a test (provided as a function).

var ans = arr.filter(value => value>60);

console.log("Answer:",ans);

// ------------------------------------------ reduce ------------------------------------------

// Takes two values at a time and reduces them to one.
// The reduce() method reduces the array to a single value.
// It executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total)
// We can make any JS function using reduce as it is very powerful.

var nums = [75, 25, 15, 10, 5];
var reduced_val = nums.reduce((total,number)=>total-number);

console.log("Answer reduced:",reduced_val);

// ------------------------------------------ slice ---------------------------------------------

// The slice() method returns the selected elements in an array, as a new array object.
// The slice() method selects the elements starting at the given start argument, 
// and ends at, but does not include, the given end argument.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

console.log("Sliced fruits:",citrus)
// destructiong of array
// making a copy of array
// ----------------------------------------- push Completed -------------------------------------
// ----------------------------------------- pop Completed --------------------------------------
// forEach
// ----------------------------------------- fill -----------------------------------------------

// The fill() method fills the specified elements in an array with a static value.
// You can specify the position of where to start and end the filling. If not specified, 
// all elements will be filled.
// Note: this method overwrites the original array.

var  cars= ["BMW", "Opel", "Alfa-Romeo", "Mercedes"];
var filled = cars.fill("VW");

console.log("Filled:", filled);

// ------------------------------------------ indexOf -------------------------------------------

// The indexOf() method searches the array for the specified item, and returns its position.
// The search will start at the specified position, or at the beginning if no start position is specified, 
// and end the search at the end of the array.
// Returns -1 if the item is not found.
// If the item is present more than once, the indexOf method returns the position of the first occurence.
// Tip: If you want to search from end to start, use the lastIndexOf() method.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

console.log("Index:",a);

// reverse
// sort
// ------------------------------------------- includes ---------------------------------------------

// The includes() method determines whether an array contains a specified element.
// This method returns true if the array contains the element, and false if not.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");

console.log("Present:",n);
