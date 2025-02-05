import { TextCssType } from '../../constants/text-css-type';
import { TColoriesItemProps } from "../../types/types";
import Span from '../span/Span';
import Text from '../text/text';
import caloriesStyles from "./calories-item.module.css";

function ColoriesItem({ name, count }: TColoriesItemProps) {
  return (
    <Text type={TextCssType.TextInactive} classes={`${caloriesStyles["calories-item"]}`}>
      {name}
      <Span type={TextCssType.DigitsDefault}>{count}</Span>
    </Text>
  );
}

export default ColoriesItem;
