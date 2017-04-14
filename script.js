var boxes = document.getElementsByClassName('box');
var numBoxes = boxes.length;
var color = 'blue'

switch (numBoxes - 1 / 100 | 0) {
    case 2:
        color = 'yellow'
        break;
    case 3:
        color = 'green'
        break;
    case 4:
        color = 'purple'
        break;
    case 5:
        color = 'orange'
        break;
    case 6:
        color = 'pink'
        break;
    case 7:
        color = 'black'
        break;
    case 8:
        color = 'brown'
        break;
    default:
        color = 'blue'
}


function clickHandler() {
    this.style.backgroundColor = color;
//    this.classList.toggle('clicked');//
}

for (var i = 0; i < numBoxes; i++) {
    var box = boxes[i];
    box.addEventListener("click", clickHandler);
}