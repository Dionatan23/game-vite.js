import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";    
import BordGame from "./src/objects/BordGame";

const $root = document.querySelector("#root");
const $htmBordGame = BordGame(4);

console.log($htmBordGame);

$root.insertAdjacentHTML("beforeend", $htmBordGame)