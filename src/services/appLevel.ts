import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { RootState } from '../redux/store';


const axiosBaseQuery:any = (baseUrl: string) => async (payload: any, { getState }: { getState: () => RootState }) => {
  const state = getState();
  const token = state.appState.authToken;

  try {
    const result = await axios({
      url: baseUrl + payload?.url,
      method: payload?.method,
      data: payload?.body,
      headers: {
        ...payload?.headers,
        Authorization: `Bearer ${token}`, 
      },
    });
    return { data: result?.data };
  } catch (axiosError) {
    const err: any = axiosError;
    return {
      error: {
        status: err?.response?.status,
        data: err?.response?.data || err?.message,
      },
    };
  }
};


export const appLevelApi = createApi({
  reducerPath: 'AppLevel_SolzitApi',
  baseQuery: axiosBaseQuery('https://solzitessapi-dev.azurewebsites.net/api/V1'),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/Auth/Authenticate',
        method: 'POST',
        body: data,
      }),
    }),
    getUpcomingBirthdays: builder.query({
      query: () => ({
        url: '/Dashboard/GetSoluzioneUpcomingBirthdays',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUpcomingBirthdaysQuery } = appLevelApi;
