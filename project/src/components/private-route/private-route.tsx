import { RouteProps, Navigate } from 'react-router-dom';
import { Paths } from '../../utils/paths';
import { AuthorizationStatus } from '../../utils/const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authorizationStatus} = props;

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={Paths.Login} replace />;
}

export default PrivateRoute;
