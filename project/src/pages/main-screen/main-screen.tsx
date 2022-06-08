import React, { useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from '../../hooks';

import { cities, NameSpace } from '../../utils/const';

import OfferList from '../../components/offer-list/offer-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import Sorting from '../../components/sorting/sorting';
import Spinner from '../../components/spinner/spinner';
import { fetchOffers } from '../../store/api-actions';
import NoOffers from '../../components/no-offers/no-offers';
import LoadingError from '../../components/loading-error/loading-error';
import { allOffersSelector, sortedOffersSelector } from '../../store/data/selectors';
import { citySelector, activeOfferIdSelector } from '../../store/app/selectors';
import { setOffers } from '../../store/data/data';

function MainScreen(): JSX.Element {
  const { dataRequested, dataSucceed, dataFailed } = useSelector(
    (state) => state[NameSpace.Data],
  );
  const city = useSelector(citySelector);
  const activeOfferId = useSelector(activeOfferIdSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());

    return () => {
      dispatch(setOffers([]));
    };
  }, [dispatch]);

  const offers = useSelector(allOffersSelector);
  const cityOffers = useSelector(sortedOffersSelector);

  const renderContent = () => {
    if (dataRequested) {
      return <Spinner />;
    }

    if (dataFailed) {
      return <LoadingError />;
    }

    if (dataSucceed && cityOffers.length === 0) {
      return <NoOffers />;
    }

    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {cityOffers.length} place{cityOffers.length > 1 && 's'} to stay in{' '}
            {city.title}
          </b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            <OfferList offers={cityOffers} type="cities" />
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              city={city}
              offers={offers}
              activePointId={activeOfferId}
            />
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main
        className={cx('page__main page__main--index', {
          'page__main--index-empty': cityOffers.length === 0,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList items={cities} />
        </div>
        <div className="cities">{renderContent()}</div>
      </main>
    </div>
  );
}

export default React.memo(MainScreen);
