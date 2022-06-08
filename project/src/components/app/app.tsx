import { Routes, Route } from 'react-router-dom';
import { Paths } from '../../utils/paths';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import PropertyScreen from '../../pages/property-screen/property-screen';
import HistoryRouter from '../history-router/history-router';
import history from '../../history';
import ErrorBoundary from '../error-boundary/error-boundary';

function App(): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <ErrorBoundary>
        <Routes>
          <Route path={Paths.Main} element={<MainScreen />} />
          <Route path={Paths.Login} element={<LoginScreen />} />
          <Route
            path={Paths.Favorites}
            element={
              <PrivateRoute>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route path={Paths.Room} element={<PropertyScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </ErrorBoundary>
    </HistoryRouter>
  );
}

export default App;
