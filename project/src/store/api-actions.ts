import { setToken } from './../services/token';
import {
  TAuthData,
  TAuthInfo,
  TComment,
  TCommentPost,
  TUserData
} from './../types/index';
import { AuthorizationStatus } from './../utils/const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { TServerOffer } from './../types/offers';
import { adaptOffer } from './../utils/adapter';
import { ActionType } from './../types/action';
import { api, store } from '.';

import {
  requestOffers,
  setOffers,
  setError,
  requestDetails,
  setActiveOffer,
  setNeighbourOffers,
  setComments,
  updateOffer
} from './data/data';
import {
  setAuthStatus,
  setFavoriteOffers,
  setUser,
  updateFavoriteOffers
} from './user/user';
import request from 'axios';
import history from '../history';

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export const fetchOffers = createAsyncThunk(
  ActionType.RequestOffers,
  async () => {
    store.dispatch(requestOffers());
    api
      .get<TServerOffer[]>(APIRoute.Offers)
      .then(({ data }) => {
        const adaptedData = data.map(adaptOffer);
        store.dispatch(setOffers(adaptedData));
      })
      .catch((err) => {
        toast('Something wrong!');
        store.dispatch(setError());
      });
  },
);

export const checkAuthorization = createAsyncThunk(
  ActionType.CheckAuth,
  async () => {
    api
      .get<TUserData>(APIRoute.Login)
      .then((response) => {
        store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
        store.dispatch(setUser(response.data));
        store.dispatch(fetchFavoriteOffers());
      })
      .catch(() => {
        store.dispatch(setAuthStatus(AuthorizationStatus.NotAuth));
      });
  },
);

export const makeSignIn = createAsyncThunk(
  ActionType.SignIn,
  async ({ email: login, password }: TAuthData) => {
    api
      .post<TAuthInfo>(APIRoute.Login, { email: login, password })
      .then((response) => {
        const { avatarUrl, email, id, isPro, name, token } = response.data;
        const user: TUserData = {
          id,
          name,
          email,
          avatarUrl,
          isPro,
        };

        store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
        store.dispatch(fetchFavoriteOffers());
        setToken(token);
        store.dispatch(setUser(user));
      })
      .catch((err) => console.log(err));
  },
);

export const fetchDetails = createAsyncThunk(
  ActionType.RequestDetails,
  async (id: string) => {
    store.dispatch(requestDetails());
    try {
      const response = await api.get<TServerOffer>(`${APIRoute.Offers}/${id}`);
      if (response.status === 200) {
        store.dispatch(setActiveOffer(adaptOffer(response.data)));
      }
    } catch (error) {
      toast('Wrong request!');
      store.dispatch(setActiveOffer(undefined));
    }
  },
);

export const fetchNeighbours = createAsyncThunk(
  ActionType.RequestNeighbours,
  async (id: string) => {
    try {
      const response = await api.get<TServerOffer[]>(
        `${APIRoute.Offers}/${id}/nearby`,
      );
      if (response.status === 200) {
        store.dispatch(setNeighbourOffers(response.data.map(adaptOffer)));
      }
    } catch (error) {
      store.dispatch(setNeighbourOffers([]));
    }
  },
);

export const fetchComments = createAsyncThunk(
  ActionType.RequestComments,
  async (id: string) => {
    try {
      const response = await api.get<TComment[]>(`${APIRoute.Comments}/${id}`);
      if (response.status === 200) {
        store.dispatch(setComments(response.data));
      }
    } catch (error) {
      store.dispatch(setComments([]));
    }
  },
);

export const postComment = createAsyncThunk(
  ActionType.PostComment,
  async (params: { comment: TCommentPost; offerId: string }) => {
    try {
      const response = await api.post<TComment[]>(
        `${APIRoute.Comments}/${params.offerId}`,
        params.comment,
      );
      if (response.status === 200) {
        store.dispatch(setComments(response.data));
      }
    } catch (error) {
      toast('Something went wrong! Try again later.');
    }
  },
);

export const fetchFavoriteOffers = createAsyncThunk(
  ActionType.RequestFavoriteOffers,
  async () => {
    try {
      const response = await api.get<TServerOffer[]>(APIRoute.Favorite);
      if (response.status === 200) {
        store.dispatch(setFavoriteOffers(response.data.map(adaptOffer)));
      }
    } catch (error) {
      toast('Can\'t get favorite offers! Try again later!');
    }
  },
);

export const addToFavorite = createAsyncThunk(
  ActionType.AddToFavorite,
  async ({ id, status }: { id: TServerOffer['id']; status: 0 | 1 }) => {
    try {
      const response = await api.post(`${APIRoute.Favorite}/${id}/${status}`);

      if (response.status === 200) {
        store.dispatch(updateFavoriteOffers(adaptOffer(response.data)));
        store.dispatch(updateOffer(adaptOffer(response.data)));
      }
    } catch (error) {
      let errorStatus;
      console.log(error);


      if (request.isAxiosError(error)) {
        errorStatus = error.response?.status;
      }

      if (errorStatus === 401) {
        history.replace({
          pathname: APIRoute.Login,
        });
        toast('Sign in to be able doing it!');
      } else {
        toast('Something wrong! Try again later!');
      }
    }
  },
);
