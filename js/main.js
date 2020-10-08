//import your packages here
import Team from "./modules/DataModule.js";
//import Person from "./modules/TheNavSystem.js";

(() => {
// stub * just a place for non-component-specifie stuff
console.log('Loaded');

console.log(Team);

debugger;

//select our user elements and load the content
let userSection = document.querySelector(".user-section").children;

userSection[1].textContent = Team["Justin"].name;
userSection[2].textContent = Team["Justin"].role;
userSection[3].textContent = Team["Justin"].nickname;
})();