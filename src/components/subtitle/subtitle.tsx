import { TSubtitleProps } from "../../types/types";
import getStylesByType from "../../utils/functions/get-styles-by-type";

function Subtitle({ children, type, classes }: TSubtitleProps) {
  return (
    <h2 className={`${getStylesByType(type)} ${classes && classes}`}>
      {children}
    </h2>
  );
}

export default Subtitle;
