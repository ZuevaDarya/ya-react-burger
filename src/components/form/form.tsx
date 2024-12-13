import { FormPropsType } from "../../types/types";
import formStyles from "./form.module.css";

function Form({ title, children }: FormPropsType) {
  return (
    <form className={formStyles.form}>
      {title && <h1 className="text text_type_main-medium">{title}</h1>}
      {children}
    </form>
  );
}

export default Form;
