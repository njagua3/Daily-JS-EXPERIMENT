const title = document.querySelector("h1");

console.log(title.style);

/* .style property we can use it to add stying or remove

if we want to get the color style property and just see it */

console.log(title.style.color);

//ADDING A STYLE

title.style.margin = "50px";
/* this method does not overwrite attributes
the above method is better than the setAttribute method

EXAMPLE 2 = lets say we want to change/update the color style

we already have orange and we want to change it*/
title.style.color = "red";

/*Lets say we want to change the font-size
we remove the underscore since in js it means subtraction
instead we use camelcase*/

title.style.fontSize = "36px";

/* NB - IN JS when we have a double barrel property name eg font-size
we change it camel casing

EXAMPLE 3 = lets say we want to remove the font-size style

DELETING A STYLE
set property equal to an empty string */

title.style.margin = "";


/* MOST OF THE TIME WHEN WE ARE ADDING OR REMOVING JUST A
SINGLE STYLE I WILL USE THIS WAY INSTEAD OF USING THE SET ATTR METHOD
*/