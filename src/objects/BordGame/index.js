import CardGame from "../../components/CardGame";

const BordGame = (amountCards) => {
    const $htmlCardGame = CardGame()
    const $htmBordGame = $htmlCardGame.repeat(amountCards)

    return $htmBordGame;
};

export default BordGame;