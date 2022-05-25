import {TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook} from 'react-redux';
import { State, AppDispatch } from '../types/store';

export const useSelector: TypedUseSelectorHook<State> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();
