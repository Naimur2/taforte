import { IMyCard } from "../src/interfaces/index";

const mayCards: IMyCard = [];

export default mayCards;

export const getMyCards = () => {
    return mayCards;
};

export const insertIntoMyCards = (card: IMyCard) => {
    mayCards.push(card);
};
