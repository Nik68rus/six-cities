import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthorizationStatus } from '../../utils/const';
import { Paths } from '../../utils/paths';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-gound-screen';
import PrivateRoute from '../private-route/private-route';
import PropertyScreen from '../property-screen/property-screen';

interface AppProps {
  count: number;
}

function App({ count }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Main} element={<MainScreen count={count} />} />
        <Route path={Paths.Login} element={<LoginScreen />} />
        <Route
          path={Paths.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NotAuth}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path={Paths.Room} element={<PropertyScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
