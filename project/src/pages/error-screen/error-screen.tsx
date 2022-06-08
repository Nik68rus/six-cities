import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './error-screen.module.css';

function ErrorScreen(): JSX.Element {
  return (
    <div className={styles.error}>
      <Header />

      <main className={styles.errorContent}>
        <div>Something went wrong! Reload the page please!</div>
      </main>

      <Footer />
    </div>
  );
}

export default ErrorScreen;
