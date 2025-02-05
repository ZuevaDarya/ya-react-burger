import { TextCssType } from "../../constants/text-css-type";
import bun from "../../images/bun-01.svg";
import Span from "../span/Span";
import styles from "./feed-ingredient.module.css";

function FeedIngredient() {
  return (
    <div className={styles["ingredient-preview"]}>
      <img className={styles.image} src={bun} />
      <Span type={TextCssType.TextDefault} classes={`${styles.count}`}>
        +3
      </Span>
    </div>
  );
}

export default FeedIngredient;
