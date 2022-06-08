import Card from '../../components/card/card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useSelector } from '../../hooks';
import { favoriteSelector } from '../../store/user/selectors';
import { Link } from 'react-router-dom';
import { Paths } from '../../utils/paths';
import { TCityName } from '../../types';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../store/app/app';
import { cities } from '../../utils/const';
import FavoritesScreenEmpty from '../favorites-screen-empty/favorites-screen-empty';

function FavoritesScreen(): JSX.Element {
  const list = useSelector(favoriteSelector);
  const favoriteCities = [...new Set(list.map((ofr) => ofr.city.title))];
  const dispatch = useDispatch();

  const cityClickHandler = (city: TCityName) => {
    const cityToSet = cities.find((c) => c.title === city);
    if (cityToSet !== undefined) {
      dispatch(changeCity(cityToSet));
    }
  };

  if (!list.length) {
    return <FavoritesScreenEmpty />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link to={Paths.Main} onClick={cityClickHandler.bind(null, city)} className="locations__item-link">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {list.filter((ofr) => ofr.city.title === city).map((item) => (
                      <Card key={item.id} type="favorites" offer={item} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesScreen;
