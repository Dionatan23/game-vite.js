import "./style.css";

const CardGame = (icon = "alura-pixel", alt = "Logo da alura") => {
  return /*html*/ `
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `;
};

export default CardGame;