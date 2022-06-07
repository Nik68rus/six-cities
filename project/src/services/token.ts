const AUTH_TOKEN = 'app-auth-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token ?? '';
};

export const setToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const dropToken = ():void => {
  localStorage.removeItem(AUTH_TOKEN);
};
