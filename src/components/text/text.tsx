import { TTextProps } from "../../types/types";
import getStylesByType from "../../utils/functions/get-styles-by-type";

function Text({ children, type, classes }: TTextProps) {
  return (
    <p data-testid="ingredient-name" className={`${getStylesByType(type)} ${classes && classes}`}>
      {children}
    </p>
  );
}

export default Text;
