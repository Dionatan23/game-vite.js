import './style.css';
import CardGame from "../../components/CardGame";

const BordGame = (amountCards) => {
    const $htmlCardGame = CardGame()
    const $htmContent = $htmlCardGame.repeat(amountCards)

    return `
    <section class="board-game"> 
        ${$htmContent}
    </section>
    `;
};

export default BordGame;