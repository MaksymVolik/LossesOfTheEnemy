import {configureStore} from '@reduxjs/toolkit';
import stats from './statsSlice';
import date from './dateSlice';
// import language from './languageSlice';

const stringMiddleware = () => next => action => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

export const store = configureStore({
  reducer: {stats, date},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(stringMiddleware),
  // devTools: process.env.NODE_ENV !== 'production',
});
