import { TTitleProps } from "../../types/types";
import getStylesByType from "../../utils/functions/get-styles-by-type";

function Title({ children, type, classes, testId }: TTitleProps) {
  return (
    <h1 data-testid={testId} className={`${getStylesByType(type)} ${classes && classes}`}>
      {children}
    </h1>
  );
}

export default Title;
