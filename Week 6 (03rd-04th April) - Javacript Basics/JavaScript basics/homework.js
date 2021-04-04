// -------------------------------------- Implement Find using reduce ------------------------------------

var arr = [40, 50, 55, 67, 75, 66];
var value = 75;

var search = arr.reduce(function (acc, arr_num){            
                                                            
    if (acc) return acc;                            // undefined is returned everytime, it's value stays the same.
    if (value == arr_num) return arr_num;           // Only arr_num value keeps changing and
                                                    // is compared with desired value.
                                                    //i.e 40,50,55,67,75,66 are compared with 75.        
    return acc;

}, undefined)

console.log("Number found",search);
    