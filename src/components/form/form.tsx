import { TFormProps } from "../../types/types";
import formStyles from "./form.module.css";

function Form({ title, children, handleSubmit }: TFormProps) {
  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      {title && <h1 className="text text_type_main-medium">{title}</h1>}
      {children}
    </form>
  );
}

export default Form;
