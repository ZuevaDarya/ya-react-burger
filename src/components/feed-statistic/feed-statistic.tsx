import { TextCssType } from "../../constants/text-css-type";
import { TFeedStatisticProps } from "../../types/types";
import Span from "../span/Span";
import Subtitle from "../subtitle/subtitle";

function FeedStatistic({ title, count }: TFeedStatisticProps) {
  return (
    <div>
      <Subtitle type={TextCssType.TextMedium}>{title}</Subtitle>
      <Span type={TextCssType.DigitsLarge}>{count}</Span>
    </div>
  );
}

export default FeedStatistic;
