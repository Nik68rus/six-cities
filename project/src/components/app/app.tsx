import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Paths } from '../../utils/paths';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import PropertyScreen from '../../pages/property-screen/property-screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
