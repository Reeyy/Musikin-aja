// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SongTypes } from '../../types';

// Define a service using a base URL and expected endpoints
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '086782ef66msh0e630f76ac4374bp1d1151jsn812ce2a17df4'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<SongTypes[], void>({
      query: () => '/charts/world',
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetTopChartsQuery } = shazamCoreApi;
