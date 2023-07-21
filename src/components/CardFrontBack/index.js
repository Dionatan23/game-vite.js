import CardGame from '../CardGame';

const CardFrontBack = () => {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("javascript", "logo do js")}
        </article>
    `
};

export default CardFrontBack;