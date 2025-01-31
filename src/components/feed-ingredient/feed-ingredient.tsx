import bun from "../../images/bun-01.svg";
import styles from "./feed-ingredient.module.css";

function FeedIngredient() {
  return (
    <div className={styles["ingredient-preview"]}>
      <img className={styles.image} src={bun} />
      <span className={`${styles.count} text text_type_main-default`}>+3</span>
    </div>
  );
}

export default FeedIngredient;
