//import your packages here
import Team from "./modules/DataModule.js";
//import Person from "./modules/TheNavSystem.js";

(() => {

    fetch('./DataSet.json')
    .then(res => res.json()) // parse the JASON (translate) back to Plain
    .then(data => {
        // this is our data (DataSet.json)
        // Converted to a plain JavaScript Object
        
    
        // debugger;
        console.log(data)
        handleDataSet(data);
    // here's where you would call the function that puts the pieces on the page
    })

    .catch((err) => {
    console.log(err);
    })

console.log('Loaded');

// console.log(Team);

// debugger;

//select our user elements and load the content
// let userSection = document.querySelector(".user-section").children;


function handleDataSet(data) {
    // let currentUser = userTemplate.cloneNode(true),
    //   currentUserText = currentUser.querySelector('.user').children;
    
    let userSection =document.querySelector(".user-section"),
    userTemplate = document.querySelector("#profs-template").content;

    //make a copy of our template here and then
    // populate the children (text element) with
    //the static data from the team object
      debugger;
      for (let user in data) {

        

        let currentUser = userTemplate.cloneNode(true),
        currentUserText = currentUser.querySelector('.user').children;

             currentUserText[1].textContent = data[user].name;
             currentUserText[2].src = `images/${data[user].avatar}.jpg`;
             currentUserText[2].textContent = data[user].role;
             currentUserText[3].textContent = data[user].nickname;

             userSection.appendChild(currentUser);
      }
   

      console.log(data);
 }
  
 //handleDataSet(Team);

})();