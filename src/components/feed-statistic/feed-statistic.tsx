import { TFeedStatisticProps } from "../../types/types";

function FeedStatistic({ title, count }: TFeedStatisticProps) {
  return (
    <div>
      <h2 className="text text_type_main-medium">{title}</h2>
      <span className="text text_type_digits-large">{count}</span>
    </div>
  );
}

export default FeedStatistic;
