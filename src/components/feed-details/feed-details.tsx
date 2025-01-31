import { TFeedDetailsProps } from '../../types/types';

function FeedDetails({ title, count }: TFeedDetailsProps) {
  return (
    <div>
      <h2 className="text text_type_main-medium">{title}</h2>
      <span className="text text_type_digits-large">{count}</span>
    </div>
  );
}

export default FeedDetails;
