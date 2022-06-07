import styles from './loading-error.module.css';
import cx from 'classnames';
import { useDispatch } from '../../hooks';
import { fetchOffers } from '../../store/api-actions';

function LoadingError (): JSX.Element {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(fetchOffers());
  };

  return (
    <section className={cx(styles.message, 'container')}>
      <div className={styles.text}>Something went wrong! Try again later!</div>
      <button className={styles.button} type="button" onClick={buttonClickHandler}>Try again!</button>
    </section>
  );
}

export default LoadingError;
