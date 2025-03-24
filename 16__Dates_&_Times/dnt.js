/* 
Dates are essentially objects

They can be useful for many things eg creating date for a blog post

How to create a new date object?
We use what's known as a CONSTRUCTOR in JS
*/

const now = new Date();

console.log(now);

/*
The constructor looks like a function coz we invoke it
& its calling a constructive fn to create this object
but we put the keyword new infront of it to say we want a new object
of this data type.

The date object comes packed with methods that we can use to grab 
certain info

We can grab the year, months, day, times
*/

console.log("getFullYear:", now.getFullYear());
console.log("getMonth:", now.getMonth());
console.log("getDate:", now.getDate());
console.log("getDay:", now.getDay());
console.log("getHours:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

/*Timestamps
Represented in a date by the number of milliseconds since the 1st of Jan 1970

Allow us to compare 2 dates together

*/

console.log("Timestamp:", now.getTime());

// Date strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
