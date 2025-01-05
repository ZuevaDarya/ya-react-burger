import { Link } from "react-router-dom";
import linkSyles from "./form-link.module.css";
import { TFormLinkProps } from "../../types/types";

function FormLink({ route, preText, linkText }: TFormLinkProps) {
  return (
    <p className="text text_type_main-default text_color_inactive">
      {preText}{" "}
      <Link to={route} className={linkSyles.link}>
        {linkText}
      </Link>
    </p>
  );
}

export default FormLink;
