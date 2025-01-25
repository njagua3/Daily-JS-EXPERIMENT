/* 
ADDING & REMOVING CLASSES
IN HTML FILE I HAVE SOME DUMMY CONTENT I HAVE ADDED

I HAVE ALSO LINKED A STYLESHEET IN THE HEAD OF THE HTML FILE

Changing classes in js
we have a an example in the css file and html file

the p tag has two classes - error and success
we want to change between the 2 classes. its like having a login/logout button

1st grab the p tag using the querySelector */

const para = document.querySelector("p");

//lets logout all the classes the above element has
console.log(para.classList);

/* ADDING OR REMOVING CLASSES 

ADDING

para.classList.add('error')

removing

para.classList.remove('error')

IN OUR CSS FILE WE HAVE 2 STYLES FOR 2 CLASSES

ADDING THE success CLASS
*/

para.classList.add("success");

/* PRACTICE
Inside the html file we have added a series of p tags

some have the word error and others success and some
do not have

The challenge is to query all the elements and cycle through
them & I want you to give a class of error where error is inside the text

*/

//STEP 1 - QUERY ALL THE P TAGS

const pTags = document.querySelectorAll("p");
console.log(pTags);

/* 
STEP 2

WE GET A NODELIST - WE CYLE THROUGH USING FOREACH METHOD

pTags.forEach((pTag) => {
  // IF ERROR IS INSIDE THE TEXT
  if (pTag.innerText.includes("error")) {
    pTag.classList.add("error");
    // WE CAN ALSO ADD THE SUCCESS CLASS IF IT EXISTS
  } else if (pTag.innerText.includes("success")) {
    pTag.classList.add("success");
  }
});

OR WE CAN USE THE textContent property*/

pTags.forEach((pTag) => {
  if (pTag.textContent.includes("error")) {
    pTag.classList.add("error");
  } else if (pTag.textContent.includes("success")) {
    pTag.classList.add("success");
  }
});

/* HOW TO TOGGLE CLASSES

WE USE THE TOGGLE METHOD

We need to cover this chapter again. start the dom again
*/