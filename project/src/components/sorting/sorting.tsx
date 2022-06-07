import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { SortType } from '../../utils/const';
import { useDispatch, useSelector } from '../../hooks';
import { sortingSelector } from '../../store/app/selectors';
import { changeSorting } from '../../store/app/app';

function Sorting(): JSX.Element {
  const dispatch = useDispatch();
  const current = useSelector(sortingSelector);
  const [isOpen, setIsOpen] = useState(false);

  const documentClickHandler = (evt: MouseEvent) => {
    if (!(evt.target as HTMLElement).closest('.places__sorting')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', documentClickHandler );

    return () => {
      document.removeEventListener('click', documentClickHandler );
    };
  }, [isOpen]);

  const sortingClickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const sortingChoiceHandler = (type: SortType) => {
    sortingClickHandler();
    dispatch(changeSorting(type));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={sortingClickHandler}
      >
        {current}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortType).map((sort) => (
            <li
              key={sort}
              className={cx('places__option', {'places__option--active': sort === current} )}
              tabIndex={0}
              onClick={sortingChoiceHandler.bind(null, sort)}
            >
              {sort}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default React.memo(Sorting);
