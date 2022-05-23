import { TReview } from '../../types';
import ReviewItem from '../review-item/review-item';

interface ReviewListProps {
  reviews: TReview[];
}

function ReviewList(props: ReviewListProps): JSX.Element {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
