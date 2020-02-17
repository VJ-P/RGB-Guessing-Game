var colours = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisp");
var messageDisplay = document.querySelector("#message");

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
    //add init colours to squares
    squares[i].style.backgroundColor = colours[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab colour of picked square
        var clickedColour = this.style.backgroundColor
        //compare colour to pickedColour
        if(clickedColour === pickedColour){
            messageDisplay.textContent = "Correct";
            changeColours(clickedColour);

        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}


function changeColours(colour){
    //loop through all squares
    for(var i = 0; i < colours.length; i++){
        //change each colour
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour(){
    var random = Math.floor(Math.random()*colours.length)
    return colours[random];
}