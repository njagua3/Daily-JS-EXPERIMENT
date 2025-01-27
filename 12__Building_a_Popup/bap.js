/* By default we do not want the popup to show

So we need to set the display to none

we only want to show it when the button is clicked

1st get a reference to the button
*/
const button = document.querySelector("button");

// Next add an event listener to the button
// get a reference to the popup
const popup = document.querySelector(".popup-wrapper");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

//We also need to attach an event listener to the X for closing
// the popup and also the overlay
// when a user clicks outside the popup, popup closes

// Get a reference to the x button

const close = document.querySelector(".popup-close");

close.addEventListener("click", () => {
  popup.style.display = "none";// since we're closing the popup and not the button
});

popup.addEventListener("click", () => {
    popup.style.display = "none";// since we're closing the popup and not the button
  });
  
