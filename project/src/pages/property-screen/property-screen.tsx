import { useEffect } from 'react';
import cx from 'classnames';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import { useDispatch, useSelector } from '../../hooks';
import {
  addToFavorite,
  fetchComments,
  fetchDetails,
  fetchNeighbours
} from '../../store/api-actions';
import { AuthorizationStatus, NameSpace } from '../../utils/const';
import {
  setActiveOffer,
  setComments,
  setNeighbourOffers
} from '../../store/data/data';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Spinner from '../../components/spinner/spinner';
import { activeOfferIdSelector } from '../../store/app/selectors';
import { authStatusSelector } from '../../store/user/selectors';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useDispatch();
  const activeId = useSelector(activeOfferIdSelector);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchDetails(params.id));
      dispatch(fetchNeighbours(params.id));
      dispatch(fetchComments(params.id));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return () => {
      dispatch(setActiveOffer(undefined));
      dispatch(setNeighbourOffers([]));
      dispatch(setComments([]));
    };
  }, [dispatch, params.id]);

  const {
    activeOffer: offer,
    neighbourOffers,
    comments,
    detailsRequested,
    detailsFailed,
    detailsSucceed,
  } = useSelector((store) => store[NameSpace.Data]);

  const authorizationStatus = useSelector(authStatusSelector);

  const toggleFavoriteHandler = () => {
    if (offer && params.id) {
      dispatch(addToFavorite({id: offer.id, status: offer.isFavorite ? 0 : 1}));
    }
  };

  if (detailsFailed) {
    return <NotFoundScreen />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        {detailsRequested && <Spinner />}
        {detailsSucceed && offer && (
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
                    onClick={toggleFavoriteHandler}
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
                    Reviews &middot;{' '}
                    <span className="reviews__amount">{comments.length}</span>
                  </h2>
                  <ReviewList reviews={comments} />
                  {authorizationStatus === AuthorizationStatus.Auth && (
                    <ReviewForm />
                  )}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                city={offer.city}
                offers={neighbourOffers}
                activePointId={activeId}
              />
            </section>
          </section>
        )}
        {neighbourOffers.length && (
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OfferList
                  offers={neighbourOffers}
                  type="near-places"
                />
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default PropertyScreen;
