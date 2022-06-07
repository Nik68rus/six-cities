import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { useDispatch, useSelector } from '../../hooks';
import { makeSignIn } from '../../store/api-actions';
import { authStatusSelector } from '../../store/user/selectors';
import { TAuthData } from '../../types';
import { AuthorizationStatus } from '../../utils/const';
import { Paths } from '../../utils/paths';

function LoginScreen(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState<TAuthData>({email: '', password: ''});

  const authorizationStatus = useSelector(authStatusSelector);

  const formChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [evt.target.name]: evt.target.value});
  };

  const formSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(makeSignIn(form));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(Paths.Main);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={formSubmitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required value={form.email} onChange={formChangeHandler} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required value={form.password} onChange={formChangeHandler}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
