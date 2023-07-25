# etch-a-sketch

A very basic version of the classic etch-a-sketch toy.

A live demo of this project can be viewed [here](https://ashish-krishna-k.github.io/etch-a-sketch/)

*This project was initially completed in my first run through The Odin Project when i was still learning, now in my second run I have far more skills which is apparant in the code written. I chose to use typescript for all my revistied projects and this time I took inspiration for UI design from [michalosman's](https://github.com/michalosman) project which can be viewed [here](https://michalosman.github.io/etch-a-sketch/)*

We start of the script.ts file by declaring all the variables that connect to the respective DOM elements.

Then we declare a fillMode variable which acts as a pseudo-state which helps us in determining if the user chose to fill with single color or with random colors.

Next we create a function that generates the canvas/grid.

Next we create a helper function that can generate a random value between 0 to 255, we use this function to help create random colors.

Next we create another helper function, this will check the pseudo-state variable fillMode and then return an appropriate color value in string format which we can later utlize to change the color of the div that the user hovers over.

Next we have a function that changes the value of the fillMode pseudo-state variable based on what the user chose.

Next we have a simple function that highlights the button corresponding to the current selected fill mode.

Next we have a clearGrid function that simply resets the grid.

THe changeGridSize function takes the value of the range slider and then adjusts the grid according to the user's selection in the UI. It also displays the current value of the range slider to the user.

The changeColor function will change the background color of the div that the user hover's over, it utilizes the generateColorString function to determine what should be the new color.

Finally we bind the event handler functions to the event listeners, the 3 mode selection buttons is assigned both changeFillMode and highlightMode handlers , the clear button is assigned the function that resets the grid and finally the grid size selector range input is given the changeGridSize.

At the end we call the generateGrid function with a default size of 16.