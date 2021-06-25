// FOCUS ON WHAT THE METHODS RETURN. BECAUSE IN REDUCE WHAT IS RETURNED MATTERS, AS RETURNED VALUE IS
// STORED IN ACC.


// ------------------------------------ Implement Find using reduce -----------------------------

// Here the value returned is undefined hence we can start with initial value as undefined
var arr = [40, 50, 55, 67, 75, 66];
var value = 75;

var search = arr.reduce(function (acc, arr_num){            
                                                            
    if (acc) return acc;                          // undefined is returned every time, it's value stays the same.
    if (value == arr_num) return arr_num;        // Only arr_num value keeps changing and
                                                // is compared with desired value.
    return acc;                                // i.e 40,50,55,67,75,66 are compared with 75.        
    

}, undefined)

console.log("Number found",search);

// ------------------------------------ Implement  map using reduce -----------------------------

// Here teh returned value is a new array without changing the original array.
var newArr = arr.reduce(function (acc, val){
    
    var newValue = val + 5;
    acc.push(newValue);
    return acc
}, []);
console.log(newArr);

// ------------------------------------- Implement findIndex using reduce ----------------------

var idx = arr.reduce(function(acc, val, idx){

    if(acc != -1) return acc;
    if(val==55) return idx;
    return acc

}, -1);

console.log("Index found at position: ", idx);

// ------------------------------------- Implement Filter using reduce ----------------------

var filtered = arr.reduce(function(acc, val){

    if(val >= 55){
        acc.push(val);
    }
    return acc;

}, [])

console.log(filtered);