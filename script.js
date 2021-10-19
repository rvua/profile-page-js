// var profileName = 'Jane Doe';
// var profileNameElement = document.querySelector("#profileName");
// function editName(){
    // profileNameElement.innerText = "New Name";
    // console.log(profileName);
// }

var profileName = document.querySelector("#profile");
function editName(){
    profileName.innerText = "New Name";
    console.log(profileName);
}

var count = 2;
var countElement1 = document.querySelector('#count');
function removeName1(){
    count--;
    countElement1.innerText = count
    console.log(count);
}

var connectionRequest1 = document.querySelector("#request1");
function removeName1(){
    connectionRequest1.remove();
}

var connectionRequest2 = document.querySelector("#request1");
function removeName2(){
    connectionRequest2.remove();
}

var connectionRequest3 = document.querySelector("#request2");
function removeName3(){
    connectionRequest3.remove();
}

var connectionRequest4 = document.querySelector("#request2");
function removeName4(){
    connectionRequest4.remove();
}