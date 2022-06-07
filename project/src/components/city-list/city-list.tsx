import * as React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useDispatch, useSelector } from '../../hooks';
import { TCity } from '../../types';
import { Paths } from '../../utils/paths';
import { changeCity } from '../../store/app/app';
import { citySelector } from '../../store/app/selectors';
interface CityListProps {
  items: TCity[];
}

function CityList(props: CityListProps): JSX.Element {
  const { items } = props;
  const dispatch = useDispatch();
  const currentCity = useSelector(citySelector);

  const cityClickHandler = React.useCallback(
    (city: TCity) => {
      dispatch(changeCity(city));
    },
    [dispatch],
  );

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {items.map((city) => (
          <li key={city.title} className="locations__item">
            <Link
              to={Paths.Main}
              type="button"
              className={cx('locations__item-link tabs__item', {
                'tabs__item--active': city.title === currentCity.title,
              })}
              onClick={cityClickHandler.bind(null, city)}
            >
              <span>{city.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default React.memo(CityList);
