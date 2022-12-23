import { cards } from "../data";
import Card from "./Card";
import "../styles/card.css";

console.log(cards);
const CardList = () => {
  return (
    <div className="cardList">
      {cards.map((card) => (
        <Card
          key={card.id}
          version={card.version}
          date={card.date}
          button={card.buttonType}
          name={card.name}
          text={card.text}
          color={card.color}
          btnText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default CardList;
