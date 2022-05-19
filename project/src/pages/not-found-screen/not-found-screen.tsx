import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFoundScreen():JSX.Element {
  return (
    <div className="page page--gray">
      <Header authorized />
      <main className="page__main">
        <div className="container" style={{textAlign: 'center', fontSize: '30px', fontWeight: '500'}}>
          <p>Page not found!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundScreen;
