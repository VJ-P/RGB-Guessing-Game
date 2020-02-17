var colours = generateRandomColours(6);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisp");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")

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
            h1.style.backgroundColor = clickedColour;

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

function generateRandomColours(num){
    //make an array
    var arr = [];
    //add num random colours
    for(var i = 0; i < num; i++){
        //get random colour and push into array
        arr.push(randomColour());
    }
    //return array
    return arr;
}

function randomColour(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}