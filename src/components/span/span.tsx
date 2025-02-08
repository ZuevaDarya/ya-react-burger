import { TSpanProps } from "../../types/types";
import getStylesByType from "../../utils/functions/get-styles-by-type";

function Span({ children, type, classes }: TSpanProps) {
  return (
    <span className={`${getStylesByType(type)} ${classes && classes}`}>
      {children}
    </span>
  );
}

export default Span;
