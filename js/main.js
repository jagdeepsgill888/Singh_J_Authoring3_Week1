import { fetchData } from "./modules/DataMiner.js";


(() => {
    

    

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

        currentUserText[1].src = `images/${data[user].avatar}`;
        currentUserText[2].textContent = data[user].name;
        currentUserText[3].textContent = data[user].role;
        currentUserText[4].textContent = data[user].nickname;

             userSection.appendChild(currentUser);
      }
   

      console.log(data);
 }

 fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => console.log(err));
// fetchData('./AnotherDataSet.json').then(data => handleDataSet(data)).catch(err => console.log(err));
 //handleDataSet(Team);

})();