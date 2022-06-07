import { RouteProps, Navigate } from 'react-router-dom';
import { Paths } from '../../utils/paths';
import { AuthorizationStatus } from '../../utils/const';
import { useSelector } from '../../hooks';
import { authStatusSelector } from '../../store/user/selectors';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(authStatusSelector);
  const {children} = props;

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={Paths.Login} replace />;
}

export default PrivateRoute;
