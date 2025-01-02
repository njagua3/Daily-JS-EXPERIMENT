/* href(hyper reference) = is an example of a HTML attribute
    class = is a class attribute
    id = is an id attribute
    src = is a source attribute
    alt = is an alternative text attribute

 GET THE href attribute  

1st - get are reference

 */
const link = document.querySelector("a");

console.log(link);

/* We can use the .getAttribute() method to get the href attr 
in the a element */
console.log(link.getAttribute("href"));

/* 
CHANGING / SETTING AN ATTRIBUTE

.setAttribute() - takes in 2 args; the attribute you want to change and
the new value
*/

link.setAttribute("href", "https://www.kevinnyingi.com");
link.innerText = "Njagua Landing Page"; // change of inner text in a tag

/* 
EXAMPLE 2
WE HAVE A P TAG WITH A CLASS OF ERROR. WE WANT TO CHANGE THE ATTR

1ST - Get refrence to p tag
*/

const message = document.querySelector("p");

message.setAttribute("class", "success");

// inspect in browser to see the change

/* LET US SAY WE WANT TO ADD A STYLE ATTR TO OUR P TAG
And the attribute does not exist
 ITS VERY EASY
*/
message.setAttribute("style", "color: green");

// ALL ATTRIBUTES WE CAN GET AND SET USING THE METHODS ABOVE
