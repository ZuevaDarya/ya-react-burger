import FeedIngredient from "../feed-ingredient/feed-ingredient";
import Price from "../price/price";
import styles from "./modal-feed-card.module.css";

function ModalFeedCard() {
  return (
    <div className={styles.card}>
      <FeedIngredient />
      <h3 className="text text_type_main-default">
        Флюоресцентная булка R2-D3
      </h3>
      <div className={`${styles["price-block"]} text text_type_digits-default`}>
        <span>20</span>
        <span>x</span>
        <Price price={20} classes="text_type_digits-default" />
      </div>
    </div>
  );
}

export default ModalFeedCard;
