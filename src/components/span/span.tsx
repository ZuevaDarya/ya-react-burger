import { TSpanProps } from "../../types/types";
import getStylesByType from "../../utils/functions/getStylesByType";

function Span({ children, type, classes }: TSpanProps) {
  return (
    <span className={`${getStylesByType(type)} ${classes && classes}`}>
      {children}
    </span>
  );
}

export default Span;
