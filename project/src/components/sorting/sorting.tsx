import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Sorting as SortType } from '../../utils/const';
// import { SortDescription } from '../../utils/const';

interface SortingProps {
  current: SortType;
  onOffersSort: React.Dispatch<React.SetStateAction<SortType>>;
}

function Sorting(props: SortingProps): JSX.Element {
  const { current, onOffersSort } = props;
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
    onOffersSort(type);
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

export default Sorting;
