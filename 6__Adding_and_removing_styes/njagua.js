//Changing classes in js
// we have a an example in the css file and html file

// the p tag has two classes - error and success
// we want to change between the 2 classes. its like having a login/logout button

//1st grab the p tag using the querySelector

const para = document.querySelector("p");

//lets logout all the classes the above element has
console.log(para.classList);
