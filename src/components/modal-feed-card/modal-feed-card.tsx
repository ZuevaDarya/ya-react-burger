import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";
import FeedIngredient from "../feed-ingredient/feed-ingredient";
import Price from "../price/price";
import Span from "../span/Span";
import styles from "./modal-feed-card.module.css";

function ModalFeedCard() {
  return (
    <div className={styles.card}>
      <FeedIngredient />
      <h3 className={`${TEXT_CSS[TextCssType.TextDefault]}`}>
        Флюоресцентная булка R2-D3
      </h3>
      <div className={`${styles["price-block"]}`}>
        <Span type={TextCssType.DigitsDefault}>2</Span>
        <Span type={TextCssType.DigitsDefault}>x</Span>
        <Price price={20} classes={`${TEXT_CSS[TextCssType.DigitsDefault]}`} />
      </div>
    </div>
  );
}

export default ModalFeedCard;
