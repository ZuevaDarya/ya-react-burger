import { TextCssType } from "../../constants/text-css-type";
import { TFeedIngredientProps } from "../../types/types";
import Span from "../span/span";
import styles from "./feed-ingredient.module.css";

function FeedIngredient({ ingredient, count }: TFeedIngredientProps) {
  return (
    <div className={`${styles["ingredient-preview"]} ${count && styles["with-count"]}`}>
      <img className={styles.image} src={ingredient.image} />
      {count && (
        <Span type={TextCssType.TextDefault} classes={`${styles.count}`}>
          +{count}
        </Span>
      )}
    </div>
  );
}

export default FeedIngredient;
