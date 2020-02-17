var colours = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColour = colours[3];
var colourDisplay = document.getElementById("colourDisp");

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
            alert("COrrect")
        }else{
            alert("Wrong")
        }
    })
}