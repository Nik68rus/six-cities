import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from '../../hooks';
import { authStatusSelector, userSelector } from '../../store/user/selectors';
import { AuthorizationStatus } from '../../utils/const';
import { Paths } from '../../utils/paths';

import './header.css';

function Header(): JSX.Element {
  const user = useSelector(userSelector);
  const auth = useSelector(authStatusSelector);

  const location = useLocation();

  console.log('header render');


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {location.pathname !== Paths.Login && (
            <nav className="header__nav">
              {auth === AuthorizationStatus.Auth && (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      to={Paths.Favorites}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={user?.avatarUrl} alt="User avatar" />
                      </div>
                      <span className="header__user-name user__name">
                        {user?.email}
                      </span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link to="/" className="header__nav-link">
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              )}
              {(auth === AuthorizationStatus.NotAuth || auth === AuthorizationStatus.Unknown) && (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      to={Paths.Login}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
