// https://github.com/kirill-konshin/next-redux-wrapper/tree/types-enchancements/packages/demo-redux-toolkit

import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import acmeStore from '@/lib/slices';

import acmeApi from '@/lib/services';

const makeStore = () => {
  return configureStore({
    reducer: {
      acmeStore,
      // Add the generated reducer as a specific top-level slice
      [acmeApi.reducerPath]: acmeApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(acmeApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const store = makeStore();
setupListeners(store.dispatch);

export const wrapper = createWrapper(makeStore);
