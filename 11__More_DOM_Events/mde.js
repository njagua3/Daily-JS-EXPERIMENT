/* 
COPY EVENT

-Happens when select sth, right click and go to copy

- When you copy text it is copied to your clipboard

- When you paste it it is pasted in the current location


*/

const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
  console.log("copyright content");
});

/* MOUSE MOVE EVENT

When we move mouse around the box we are going to react to that event

Get a reference to the box
*/

const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  //console.log(e);
  //console.log(`Mouse position: X - ${e.offsetX}, Y - ${e.offsetY}`);
  box.textContent = `Mouse position: X - ${e.offsetX}, Y - ${e.offsetY}`;
});

/* WHEEL EVENT
This event is attached to the document 
*/

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});
