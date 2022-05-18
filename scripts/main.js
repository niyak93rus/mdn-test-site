let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/laptop.jpg') {
    myImage.setAttribute('src','images/programmer.jpg');
  } else {
    myImage.setAttribute('src','images/laptop.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Try programming, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Try programming, ' + storedName  + '!';
}

myButton.onclick = function() {
  setUserName();
}