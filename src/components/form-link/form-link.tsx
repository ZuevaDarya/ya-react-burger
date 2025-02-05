import { Link } from "react-router-dom";
import linkSyles from "./form-link.module.css";
import { TFormLinkProps } from "../../types/types";
import Text from '../text/text';
import { TextCssType } from '../../constants/text-css-type';

function FormLink({ route, preText, linkText }: TFormLinkProps) {
  return (
    <Text type={TextCssType.TextInactive}>
      {preText}{" "}
      <Link to={route} className={linkSyles.link}>
        {linkText}
      </Link>
    </Text>
  );
}

export default FormLink;
