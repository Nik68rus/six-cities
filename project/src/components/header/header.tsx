import { Link, useLocation } from 'react-router-dom';
import { Paths } from '../../utils/paths';

interface HeaderProps {
  authorized: boolean;
}

function Header(props: HeaderProps): JSX.Element {
  const { authorized } = props;
  const location = useLocation();

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
              {authorized && (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      to="/"
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
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
              {!authorized && (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#todo"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </a>
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

export default Header;
