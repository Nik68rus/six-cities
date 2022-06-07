import { TComment } from '../../types';
import { getDate } from '../../utils';

interface ReviewItemProps {
  review: TComment;
}

function ReviewItem(props: ReviewItemProps): JSX.Element {
  const {review} = props;
  const {comment, date, rating, user} = review;

  const [dateText, dateDate] = getDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper user__avatar-wrapper--pro">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating/5*100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateText}>
          {dateDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
