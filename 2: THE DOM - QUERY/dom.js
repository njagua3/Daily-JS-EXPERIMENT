/* When working with DOM & we are adding,removing, or changing
content there are steps to follow

1st  step - decide which element we want to either add or remove content
then we reach to the DOM and get a reference on that element.

Action of reaching in and selecting elements
is called

QUERYING the DOM - using queryselector method

You have to store the reference to the element in a variable */

const paragraph = document.querySelector("p"); //grabs 1st p tag

/* 
Document object(document.) - we use the doc obj when we want to do
sth with the webpage

.querySelector()/.querySelectorAll() - methods for querying the DOM.
                                  - returns a nodelist of elements
                                  -we can use forEach method to loop
                                  - usefulwhen working with DB's

it goes in the html document and grabs the 1st one since it goes from
top to bottom and ignores the rest

if we wanted to grab the 3rd p tag which has a class of error
then we do this const paragraph = document.querySelector(".error");

What if we had another div which had the same class as the p tag?
Check html file
we would get a reference to that div this way */

const div = document.querySelector("div.error");
console.log(div);

/* THE BROWSER CONSOLE CAN ALWAYS HELP TO GET A SELECTOR
IF YOU WANT A SELECTOR FOR EG THE H1 P ETC, RIGHT CLICK & INSPECT
THEN INSIDE THE ELEMENTS TAB HIGHLIGHT THE ELEMENT YOU WANT
RIGHT CLICK IT AND SELECT COPY SELECTOR
THIS GETS US A UNIQUE CSS SELECTOR FOR THAT ELEMENT

EXAMPLE */

const h1 = document.querySelector("body > h1");
console.log(h1);

/* WHAT IF WE WANT TO GRAB MULTIPLE ELEMENTS? */

const para = document.querySelectorAll("p");
console.log(para);
//RESULT = Nodelist(3) [p, p, p.error]

/* The result is a nodelist
A NODE LIST IS JUST A GROUP OF ELEMENTS

A node list is a collection of css selectors(eg p tags,H1'S,H2'S,H3ETC)
nodelist look like an array but it isnt
We cannot use all array methods on a node list
Like an array we can use square bracket notation to select a single element
EXAMPLE */

console.log(para[0]);
console.log(para[1]);

/*Much like an array we can use the forEach method*/

para.forEach((paragraph) => {
  console.log(paragraph);
});

/* EXAMPLE 2 */
const errors = document.querySelectorAll(".error");
console.log(errors);

/*ALWAYS USE QUERYSELECTOR || QUERYSELECTORALL

If element has an ID = #
IF element has a class = use . 

OTHER METHODS TO QUERY THE DOM
1: getElementById('') - just specify name of ID no need for #

2: getElementsByClassName('') - just specify classname no need 4 .
3: getElementsByTagName('') - just specify tag name

EXAMPLES

1 - getElementById
*/
const title = document.getElementById("page-title");
console.log(title);

/*
2 - getElementsByClassName
*/
const error2 = document.getElementsByClassName("error");
console.log(error2);

/* The result is a HTMLcollection
HTMLCollection(2) [p.error, div.error]

Just like a node list we can use square bracket notation to get a single element
in collection.

NB - WE CANNOT USE forEach method on a HTMLCollection
*/

/*
3 - getElementsByTagName('')
*/
const allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

/* The result is a HTMLCollection
HTMLCollection(3) [p, p, p.error]

WE CAN STILL USE SQUARE BRACKET NOTATION
*/
console.log(allParagraphs[1]);

/* 

NB USE QUERYSELECTOR() & QUERYSELECTORALL()
THEY RETURN A NODELIST WHICH WE CAN LOOP THROUGH

The other methods return a HTML COLLECTION WHICH WE CANT LOOP THRU
*/
