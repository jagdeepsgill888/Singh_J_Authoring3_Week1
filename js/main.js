//import your packages here
import Team from "./modules/DataModule.js";
//import Person from "./modules/TheNavSystem.js";

(() => {

// stub * just a place for non-component-specifie stuff

// set up the XMLHttp object
let myReq = new XMLHttpRequest;

// make sure we can handle whaever data comes back, or any errors
myReq.addEventListener("readystatechange", handleRequest);

// open a request and pass thruthe URL of the data that we want
myReq.open('GET', '../DataSet.json');

// actually make the request
 myReq.send();

// handleRequest funtion goes here
function handleRequest() {
    if (myReq.readyState === XMLHttpRequest.DONE) {
        // check status here and proceed
        if (myReq.status === 200) {
            // 200 means done and dusted, ready to go with the dataset!
            handleDataSet(myReq.responseText);

        } else {
            // probably got some kind of error code, so handle that 
            // a 404, 500 etc... can render appropriate error messages here
            console.error(`${myReq.status} : something done broke, son`);
        }
    } else {
        // request isn't ready yet, keep waiting...
        console.log(`Request state: ${myReq.readyState}. Still processing...`);
    }

}



console.log('Loaded');

// console.log(Team);

let userSection =document.querySelector(".user-section"),
 userTemplate = document.querySelector("#profs-template").content;

// debugger;

//select our user elements and load the content
// let userSection = document.querySelector(".user-section").children;


function handleDataSet(data) {
    // let currentUser = userTemplate.cloneNode(true),
    //   currentUserText = currentUser.querySelector('.user').children;
    
    debugger;

    //make a copy of our template here and then
    // populate the children (text element) with
    //the static data from the team object
   
      for (let user in data) {

        debugger;

        let currentUser = userTemplate.cloneNode(true),
        currentUserText = currentUser.querySelector('.user').children;

             currentUserText[1].textContent = data[user].name;
             currentUserText[2].textContent = data[user].role;
             currentUserText[3].textContent = data[user].nickname;

             userSection.appendChild(currentUser);
      }
   


 }
  
 handleDataSet(Team);

})();