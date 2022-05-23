import type { TOffer } from '../../types/offers';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { TCardType } from '../../types';

interface CardProps {
  offer: TOffer;
  onActiveCardChange?: (id: TOffer['id'] | undefined)=>void;
  type: TCardType;
}

function Card(props: CardProps) {
  const { offer, onActiveCardChange, type } = props;

  const setActiveCard = (card: TOffer | undefined) => {
    if (onActiveCardChange === undefined) {
      return;
    }

    if (card === undefined) {
      onActiveCardChange(card);
      return;
    }

    onActiveCardChange(card.id);
  };

  return (
    <article
      className={cx(
        {
          'cities__place-card': type === 'cities',
          'near-places__card': type === 'near-places',
          'favorites__card': type === 'favorites',
        },
        'place-card',
      )}
      onMouseEnter={setActiveCard.bind(null, offer)}
      onMouseLeave={setActiveCard.bind(null, undefined)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${type}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.cover}
            width={(type === 'cities' || type === 'near-places') ? '260' : '150'}
            height={(type === 'cities' || type === 'near-places') ? '200' : '110'}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cx('place-card__bookmark-button button', {
              'place-card__bookmark-button--active': offer.isFavorite,
            })}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'Remove from bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rate/5*100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
