/* Node Relations 

This is the relship between different nodes/elements in a node tree

A node tree is a visual representation of the DOM & it reps our HTML page

Types of relationships
1: Parent child relationship - eg a div with p tags inside it
2: Sibling relationship - eg a p tags inside a div are siblings

Pictures available for visual representation

IN THE HTML FILE FOR THIS LESSON I HAVE ADDED SOME ELEMENTS IN THE BODY

Lets say at some point we want to make a selection of all elements
inside the article & apply a class to each separate element

We could query for each element in h2 ie
query for h2
query for p tags
query for div tag

We will be writing too much coe that we need to

Also in most cases we might not know the tags inside the article

This could be dynamically generated by a CMS 

How to combat these problems?

QUERY THE ARTICLE & HAVE A REFERENCE TO IT

Then we can use the children property to give us the children
in a single collection

*/

const article = document.querySelector("article");

console.log(article.children); // we get a HTML collection

/* NB: Remember we cannot use the forEach method on a html 
collection. Only a node list

TURNING A HTML COLLECTION TO AN ARRAY
- Take array object built in js
- then use a method called from()
- then pass in whatever we want to make into an array

This method is not destructive. It returns a new value.

Array.from(article.children);
console.log(Array.from(article.children));// returns an array*/

Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});

/*FINDING THE PARENT ELEMENT
Lets find the parent element of the h2
*/
const title = document.querySelector("h2");
console.log(title.parentElement);
