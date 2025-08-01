// console.log("hi");

// // console.log(document.title);
// // console.log(document.body);

// console.log(document.getElementsByClassName("pTag"));

console.log(document.getElementsByTagName("h1"));

let h1Array = document.getElementsByTagName("h1");

for(let i=0; i<h1Array.length;i++){
    console.log(h1Array[i]);
}

// console.log(document.getElementById("headingTag"));


// //querySelector

// console.log(document.querySelectorAll('h1'));

// console.log(document.querySelector('#headingTag'))

// let text = document.querySelector("h1");

// text.innerText = "DOM 1 class "
// console.log(text);

// // http://127.0.0.1:5500/dom.html

function catchValue(){
    let username = document.querySelector("input");
   console.log( text.value);
}

function getGender(){
    let gender= document.getElementById("gender");
    console.log(gender.value);
}

let pTag= document.querySelector("div > p");
// console.log(pTag);
pTag.style.backgroundColor="teal";
pTag.style.fontSize = "30px"



function getText(){
    console.log(document.getElementById("inputText").value)
}


//addEventListener



document.querySelector("button").addEventListener("click",likedMe );


function likedMe(){
    console.log("liked me")
}
