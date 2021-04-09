let myImage = document.querySelector('img');

/*
The code retrieves the value of the image's src attribute.
The code uses a conditional to check if the src value is equal to the path of the original image:
If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.
*/
// Image switcher code
myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/Firefox1.svg.png'){
        myImage.setAttribute('src','images/firefox_2.gif');
    } else {
        myImage.setAttribute('src','images/Firefox1.svg.png');
    }

}
/*
The setUserName() function contains a prompt() function, which displays a dialog box, similar to alert(). 
This prompt() function does more than alert(), asking the user to enter data, and storing it in a variable after the user clicks OK.
In this case, we are asking the user to enter a name. 
Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. 
We use localStorage's setItem() function to create and store a data item called 'name',
setting its value to the myName variable which contains the user's entry for the name.
Finally, we set the textContent of the heading to a string, plus the user's newly stored name.
*/
// Personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name:');
    if(!myName){
        setUserName();
    } else{
        localStorage.setItem('name',myName);
        myHeading.textContent = "Welcome to Mozilla,"+ myName;
    }

}

/*
Add the if ... else block (below). We could call this initialization code, as it structures the app when it first loads.
This first line of this block uses the negation operator (logical NOT, represented by the !) to check whether the name data exists.
If not, the setUserName() function runs to create it.
If it exists (that is, the user set a user name during a previous visit), we retrieve the stored name using getItem() and
set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().
*/
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

myButton.onclick = function(){
    setUserName();
}
  