//Tsundere alert
//document.querySelector('html').addEventListener('click', function() {
//    alert('Stop cliquing you Baka!!!（￣□ |||| ... try to click on the image insteadʅ（ ´◔౪◔） ʃ');
//});

//Image switch
let myImage = document.querySelector('img');
myImage.addEventListener('click', function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/hito.png') {
        myImage.setAttribute('src', 'images/hito.gif');
    } else {
        myImage.setAttribute('src', 'images/hito.png');
    }
});

//Welcoming new user
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please input your name.Inputing a pseudo would be great but if you can not then it is okey');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Check this out...' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Check this out...' + storedName;
}

myButton.onclick = function() {
  setUserName();
}