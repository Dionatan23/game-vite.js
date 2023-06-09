import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";    
import BordGame from "./src/objects/BordGame";
import ScoreBoard from "./src/objects/ScoreBoard";


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${ScoreBoard()}
        ${BordGame(4)}
    `);