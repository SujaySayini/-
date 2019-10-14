//alert('Hello World'); just an alert when opening page
// DOM elements
const rotateLeftButton = document.getElementById('rotate-left');
const rotateRightButton = document.getElementById('rotate-right');
const starBorder = document.getElementById('my-border');
const starForm = document.getElementById('star-form');

// global variables
let rotation = 0;

// event handlers
function toggleStar() {
    console.log('FIRING')
    const star = document.getElementById('toggleStar');
    toggleVisibility(star);
}

function rotateStar(event) {
    const star = document.getElementById('big-Pic');
    rotate(star, event);
}

function addGreet(event) {
    event.preventDefault();
    const greet = ' '+ starForm.greet.value;
    const newGreetLi = document.createElement('li');
    const newGreetAvatar = document.createElement('div');
    newGreetAvatar.className = "avatar";
    const newGreetText = document.createElement('span');
    newGreetText.innerText = greet;
    const star = document.getElementById('star').getElementsByTagName('ul')[0];
    const newerGreetLi = star.appendChild(newGreetLi);
    newerGreetLi.appendChild(newGreetAvatar);
    newerGreetLi.appendChild(newGreetText);
    starForm.greet.value = "";
}

function toggleVisibility(element) {
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible'
    } else {
        element.style.visibility = 'hidden'
    }
}

function rotate(element, event) {
    if (event.target.id === 'rotate-left') {
        rotation = rotation - 15;
    } else {
        rotation = rotation + 15;
    }
    element.style.transform = 'rotate(' + rotation + 'deg)';
} 

// add event handlers when mouse events are triggered
starBorder.onmouseenter = toggleStar;
starBorder.onmouseleave = toggleStar;
rotateLeftButton.onclick = rotateStar;
rotateRightButton.onclick = rotateStar;
starForm.onsubmit = addGreet;