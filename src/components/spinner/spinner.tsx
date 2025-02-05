import { TextCssType } from "../../constants/text-css-type";
import Span from "../span/Span";
import styles from "./spinner.module.css";

function Spinner() {
  return <Span type={TextCssType.TextDefault} classes={styles.spinner} />;
}

export default Spinner;
