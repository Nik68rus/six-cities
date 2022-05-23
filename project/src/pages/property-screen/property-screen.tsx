import { useState } from 'react';
import cx from 'classnames';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import { TOffer, TOffers } from '../../types/offers';
import {reviews} from '../../mocks/reviews';
import Map from '../../components/map/map';
import { convertOfferToPoint } from '../../utils';
import OfferList from '../../components/offer-list/offer-list';

interface PropertyScreenProps {
  offers: TOffers;
}

function PropertyScreen(props: PropertyScreenProps): JSX.Element {
  const { offers } = props;
  const params = useParams();
  const [activeId, setActiveId] = useState<TOffer['id'] | undefined>(undefined);

  const offer = offers.find((ofr) => ofr.id.toString() === params.id);
  const neighbourOffers = offer ? offers.filter((ofr) => ofr.id!==offer.id) : [];

  return (
    <div className="page">
      <Header authorized />

      <main className="page__main page__main--property">
        {offer && (
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.map((img) => (
                  <div
                    key={img + Math.random()}
                    className="property__image-wrapper"
                  >
                    <img
                      className="property__image"
                      src={img}
                      alt="This studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{offer.title}</h1>
                  <button
                    className={cx('property__bookmark-button button', {
                      'property__bookmark-button--active': offer.isFavorite,
                    })}
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">
                      {offer.isFavorite
                        ? 'Remove from bookmarks'
                        : 'To bookmarks'}
                    </span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span
                      style={{ width: `${(offer.rate / 5) * 100}%` }}
                    >
                    </span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {offer.rate}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.capacity} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.features.map((feature) => (
                      <li key={feature} className="property__inside-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={cx(
                        'property__avatar-wrapper user__avatar-wrapper',
                        { 'property__avatar-wrapper--pro': offer.host.isPro },
                      )}
                    >
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatar}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                    {offer.host.isPro && (
                      <span className="property__user-status">Pro</span>
                    )}
                  </div>
                  <div className="property__description">
                    {typeof offer.description === 'string' && (
                      <p className="property__text">{offer.description}</p>
                    )}
                    {typeof offer.description !== 'string' &&
                      offer.description.map((paragraph) => (
                        <p key={Math.random()} className="property__text">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ReviewList reviews={reviews} />
                  <ReviewForm />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map city={offer.city} points={neighbourOffers.map(convertOfferToPoint)} activePointId={activeId}/>
            </section>
          </section>
        )}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OfferList offers={neighbourOffers} onOfferHover={setActiveId} type='near-places' />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
