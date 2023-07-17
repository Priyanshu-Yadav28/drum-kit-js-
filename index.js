 
//  document.querySelector("button").addEventListener("click", handleClick);


const btnW = document.querySelector(".w");
const btnA = document.querySelector(".a")
const btnS = document.querySelector(".s")
const btnD = document.querySelector(".d")
const btnJ = document.querySelector(".j")
const btnK = document.querySelector(".k")
const btnL = document.querySelector(".l")

let numberOfDrumButtons = document.querySelectorAll(".drum").length

for(var i = 0; i < 7; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        keyPress(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    
     }); 
}

function keyPress(key) {

switch (key) {
    case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play(); 
        break;

    case "a":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play(); 
        break;

    case "s":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play(); 
        break;

    case "d":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play(); 
        break;

    case "j":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play(); 
        break;

    case "k":
        var kikBass = new Audio("./sounds/kick-bass.mp3");
        kikBass.play(); 
        break;

    case "l":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play(); 
        break;
    
    default:
        console.log("default case called");
}
}


document.addEventListener("keypress", function(event) {
    // alert("key is pressed from keyboard:")
    // console.log(event.key);
    keyPress(event.key);

    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
     var activeButton = document.querySelector("." + currentKey);

     activeButton.classList.add("pressed");

     setTimeout(function() {
        activeButton.classList.remove("pressed");
     }, 100)

}




// -------------------------------------------------------------------------------- 
// var audio = new Audio("./sounds/tom-1.mp3");
//         audio.play(); 



  
// btnW.addEventListener("click", function () {

//     var audio = new Audio("./sounds/tom-1.mp3");
//         audio.play(); 
//     // what to do when click detected. 

//  });
// btnA.addEventListener("click", function () {

//     var audio = new Audio("./sounds/tom-2.mp3");
//         audio.play(); 
    // what to do when click detected. 

//  });
// btnS.addEventListener("click", function () {

//     alert("I got Clicked");
//     // what to do when click detected. 

//  });
// btnD.addEventListener("click", function () {

//     alert("I got Clicked");
//     // what to do when click detected. 

//  });
// btnJ.addEventListener("click", function () {

//     alert("I got Clicked");
//     // what to do when click detected. 

//  });
// btnK.addEventListener("click", function () {

//     alert("I got Clicked");
//     // what to do when click detected. 

//  });
// btnL.addEventListener("click", function () {

//     alert("I got Clicked");
//     // what to do when click detected. 

//  });

//  function handleClick() {
//     alert("I got clicked");
//  }
