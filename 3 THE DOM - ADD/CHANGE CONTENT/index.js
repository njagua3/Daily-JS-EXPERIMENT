/* WE WANT TO CHANGE THE CONTENT OF THE FIRST P TAG 
1ST GET A REFERENCE FOR THE P TAG
*/

const paragraph = document.querySelector("p");
paragraph.innerText = `We are the Njagua's`;

/* .innerText - grabs the text inside the p element
and changes it

This method overwrites the text inside the p element.

IF WE WANT TO JUST APPEND TO THE TEXT WE USE +=
EXAMPLE

paragraph.innerText += ` World!`
*/

/* CHANGING TEXT OF SEVERAL ITEMS AT ONCE by cyclig THROUGH*/

const paras = document.querySelectorAll("p");

paras.forEach((paragraph) => {
  //console.log(paragraph.innerText);
  paragraph.innerText += ` new text`;
});

/* 
   CHANGING THE HTML INSIDE AN ELEMENT
   EG : A DIV(with a class or ID) WITH A P TAG INSIDE
   1ST GET A REFERENCE
 */

const content = document.querySelector(".content");

console.log(content.innerHTML); // we get a p tag inside the div
// UPDATING IT

content.innerHTML = "<h2>THIS IS A NEW H2</h2>"; // REPLACES THE P TAG

// IF WE DO NOT WANT TO REPLACE AND JUST WANT TO APPEND WE USE +=
// SO  WE GET A H2 AND A P ELEMENT

/* EXAMPLE 

Lets say we have a db with with an array of people and we want
to output the names on a html page
*/

const people = ["Kevin", "Zahra", "Valentine", "John", "James"];

/*
1st step is to loop through the people

*/
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
