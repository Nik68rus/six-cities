import MainScreen from '../main-screen/main-screen';

interface AppProps {
  count: number;
}

function App({count}: AppProps): JSX.Element {
  return <MainScreen count={count} />;
}

export default App;
