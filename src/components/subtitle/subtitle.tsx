import { TSubtitleProps } from "../../types/types";
import getStylesByType from "../../utils/functions/getStylesByType";

function Subtitle({ children, type, classes }: TSubtitleProps) {
  return (
    <h2 className={`${getStylesByType(type)} ${classes && classes}`}>
      {children}
    </h2>
  );
}

export default Subtitle;
