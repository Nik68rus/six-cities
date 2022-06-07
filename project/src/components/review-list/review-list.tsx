import React from 'react';
import { TComment } from '../../types';
import ReviewItem from '../review-item/review-item';

interface ReviewListProps {
  reviews: TComment[];
}

function ReviewList(props: ReviewListProps): JSX.Element {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
    </ul>
  );
}

export default React.memo(ReviewList);
