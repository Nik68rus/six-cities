import { useLayoutEffect, useState } from 'react';

import {BrowserHistory} from 'history';
import {Router} from 'react-router-dom';

interface HistoryRouterProps {
  history: BrowserHistory
  basename?: string
  children?: React.ReactNode
}

function HistoryRouter(props: HistoryRouterProps) {
  const {history, basename, children} = props;
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  // console.log(state);

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      navigator={history}
      location={state.location}
      navigationType={state.action}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
