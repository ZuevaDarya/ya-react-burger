import { TextCssType } from "../../constants/text-css-type";
import { TFormProps } from "../../types/types";
import Title from "../title/title";
import formStyles from "./form.module.css";

function Form({ title, children, handleSubmit }: TFormProps) {
  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      {title && <Title type={TextCssType.TextMedium}>{title}</Title>}
      {children}
    </form>
  );
}

export default Form;
