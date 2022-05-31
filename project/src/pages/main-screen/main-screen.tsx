import React, { useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from '../../hooks';

import type { TOffer } from '../../types/offers';

import { filterOffers, sortOffers } from '../../utils';
import { cities, SortType } from '../../utils/const';
import { changeCity } from '../../store/action';

import OfferList from '../../components/offer-list/offer-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import Sorting from '../../components/sorting/sorting';
import Spinner from '../../components/spinner/spinner';
import { fetchOffers } from '../../store/api-actions';
import NoOffers from '../../components/no-offers/no-offers';

function MainScreen(): JSX.Element {
  const { offers, city, isDataLoaded } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [activeOfferId, setActiveOfferId] = useState<TOffer['id'] | undefined>(
    undefined,
  );
  const [sorting, setSorting] = useState<SortType>(SortType.Popular);

  const offerHoverHandler = (id: TOffer['id'] | undefined) => {
    setActiveOfferId(id);
  };

  useEffect(() => {
    dispatch(changeCity(cities[0]));
    dispatch(fetchOffers());
  }, [dispatch]);

  const cityOffers = useMemo(() => filterOffers(city, offers), [city, offers]);

  const renderContent = () => {
    if (!isDataLoaded) {
      return <Spinner />;
    }

    if (cityOffers.length === 0) {
      return <NoOffers />;
    }

    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {cityOffers.length} place{cityOffers.length > 1 && 's'} to
          stay in {city.title}
          </b>
          <Sorting current={sorting} onOffersSort={setSorting} />
          <div className="cities__places-list places__list tabs__content">
            <OfferList
              offers={sortOffers(cityOffers, sorting)}
              onOfferHover={offerHoverHandler}
              type="cities"
            />
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              city={city}
              offers={cityOffers}
              activePointId={activeOfferId}
            />
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="page page--gray page--main">
      <Header authorized />

      <main
        className={cx('page__main page__main--index', {
          'page__main--index-empty': cityOffers.length === 0,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList items={cities} />
        </div>
        <div className="cities">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
