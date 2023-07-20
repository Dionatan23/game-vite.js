import './style.css';
import CardFrontBack from '../../components/CardFrontBack';

const BordGame = (amountCards) => {
    const $htmlCardFrontBack = CardFrontBack()
    const $htmContent = $htmlCardFrontBack.repeat(amountCards)

    return /*html*/`
    <section class="board-game"> 
        ${$htmContent}
    </section>
    `;
};

export default BordGame;