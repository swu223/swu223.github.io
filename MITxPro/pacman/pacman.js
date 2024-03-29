var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
    img.src = pacArray[direction][focus];
    if (direction === 1) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
    // Use setTimeout to call Run every 200 millesecs
}

setInterval(Run,300);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
    if(imgWidth + pos  > pageWidth){direction = 1}
    if(pos < 0){direction = 0}
    return direction;
}
