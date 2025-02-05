import { TTextProps } from "../../types/types";
import getStylesByType from "../../utils/functions/getStylesByType";

function Text({ children, type, classes }: TTextProps) {
  return (
    <p className={`${getStylesByType(type)} ${classes && classes}`}>
      {children}
    </p>
  );
}

export default Text;
