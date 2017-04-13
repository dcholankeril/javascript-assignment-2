// Do your work in this file.

// for (var i = 0; i<=4; i++) {
//   boxes[i].addEventListener("click", boxClicked_ + i);


function boxClicked_0() {
  console.log("Hey, 1 box clicked!")

  leftMargin[0] += moveAmount;

  boxes[0].style.marginLeft = leftMargin[0] + "px";

}

var count = 0;
document.getElementById('button').onclick = function() {
   alert("button was clicked " + (count++) + " times");
};


boxes[0].addEventListener("click", boxClicked_0);