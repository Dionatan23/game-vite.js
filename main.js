import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";    
import BordGame from "./src/objects/BordGame";
import PlayerName from "./src/components/PlayerName/inde";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${PlayerName("Player 1")}
        ${PlayerName("Player 2")}
        ${BordGame(4)}
    `);