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
  


  /*
  
  Visualize everything before writing any code
  
  like this pop up
  
  we have a button called click me 
  when we click it a pop up appears

  for a button to be clickable we add an event listener method
  then give it 2 parameters; the event and the callback function

  The callback function takes in the axtion that happens after button is pressed

  in our case the popup appears after button is clicked

  thus we need a reference to the button and also the popup

  we do this by using document.querySelector method

  THE popup also has a close button
Remember initially we start having set the display to none so that the popup is hidden
and only appears after click me button is pressed
so for it to be viewable caalback fn will be
pop-up.style.display = "block";

for the poup button we must get a reference to it

we want once its clicked the wrapper is not visible ie display = none
so we need a reference to the button
and add an event listener that takes in a click parameter and a callback fn 
that set the display to none

  */