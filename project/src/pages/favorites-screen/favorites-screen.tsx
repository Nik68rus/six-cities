import Card from '../../components/card/card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useSelector } from '../../hooks';

function FavoritesScreen(): JSX.Element {
  const list = useSelector((state) => state.DATA.offers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a href="#todo" className="locations__item-link">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {list.map((item) => (
                    <Card key={item.id} type="favorites" offer={item} />
                  ))}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a href="#todo" className="locations__item-link">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <div className="favorites__places">
                    {list.map((item) => (
                      <Card key={item.id} type="favorites" offer={item} />
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesScreen;
