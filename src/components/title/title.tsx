import { TTitleProps } from '../../types/types';
import getStylesByType from '../../utils/functions/getStylesByType';

function Title({ children, type, classes }: TTitleProps) {
  return <h1 className={`${getStylesByType(type)} ${classes && classes}`}>{children}</h1>;
}

export default Title;
