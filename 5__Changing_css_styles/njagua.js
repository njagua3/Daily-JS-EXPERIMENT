const title = document.querySelector("h1");

console.log(title.style);

//.style property we can use it to add stying or remove

// if we want to get the color style property and just see it
console.log(title.style.color);

//adding a style

title.style.margin = "50px";
// this method does not overwrite attributes
// the above method is better than the setAttribute method

//EXAMPLE 2 = lets say we want to change/update the color style

// we already have orange and we want to change it
title.style.color = "red";

//Lets say we want to change the font-size
// we remove the underscore since in js it means subtraction
//instead we use camelcase

title.style.fontSize = "36px";

// DELETING A STYLE
// set property equal to an empty string

title.style.margin = "";
