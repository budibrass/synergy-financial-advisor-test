import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://interview-test-mock-api.azurewebsites.net',
});

function isHydrateAction(action) {
  return action.type === HYDRATE;
}

const acmeApi = createApi({
  reducerPath: 'acmeApi',
  baseQuery,
  endpoints: (builder) => ({
    getAllClients: builder.query({
      query: () => ({ url: `/clients` }),
    }),
    getClientProfile: builder.query({
      query: () => ({ url: `/profile` }),
    }),
  }),
  keepUnusedDataFor: 15,
});

export const {
  useGetAllClientsQuery,
  useGetClientProfileQuery,
  useLazyGetAllClientsQuery,
  useLazyGetClientProfileQuery,
} = acmeApi;

export const {
  endpoints: { getAllClients, getClientProfile },
} = acmeApi;

export default acmeApi;
