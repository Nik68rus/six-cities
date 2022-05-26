import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import type { TOffer } from '../../types/offers';
import OfferList from '../../components/offer-list/offer-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { TPoint } from '../../types';
import { convertOfferToPoint, filterOffers } from '../../utils';
import CityList from '../../components/city-list/city-list';
import { cities, Sorting as SortType } from '../../utils/const';
import { useDispatch, useSelector } from '../../hooks';
import { changeCity, setCityOffers } from '../../store/action';
import { offers } from '../../mocks/offers';
import Sorting from '../../components/sorting/sorting';

function MainScreen(): JSX.Element {
  const { offers: cityOffers, city } = useSelector((state) => state);
  const [activeOfferId, setActiveOfferId] = useState<TOffer['id'] | undefined>(
    undefined,
  );
  const [sorting, setSorting] = useState<SortType>(SortType.Popular);

  const offerHoverHandler = (id: TOffer['id'] | undefined) => {
    setActiveOfferId(id);
  };

  const sortOffers = (sortType: SortType) => {
    if (cityOffers.length > 1) {
      return [...cityOffers].sort((a: TOffer, b: TOffer) => {
        switch (sortType) {
          case SortType.Popular:
            return 1;
          case SortType.PriceDec:
            return b.price - a.price;
          case SortType.PriceInc:
            return a.price - b.price;
          case SortType.Rate:
            return b.rate - a.rate;
          default:
            return 1;
        }
      });
    } else {
      return cityOffers;
    }
  };

  const points: TPoint[] = offers.map(convertOfferToPoint);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCity(cities[0]));
    dispatch(setCityOffers(filterOffers(cities[0], offers)));
  }, [dispatch]);

  const emptyMainPage = (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in{' '}
            {city.title}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );

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
          {cityOffers.length === 0 ? (
            emptyMainPage
          ) : (
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
                    offers={sortOffers(sorting)}
                    onOfferHover={offerHoverHandler}
                    type="cities"
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={city}
                    points={points}
                    activePointId={activeOfferId}
                  />
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
