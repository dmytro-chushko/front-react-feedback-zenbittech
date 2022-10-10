import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nestjs-mysql-zenbittech.herokuapp.com/',
  }),
  tagTypes: ['Feedback'],
  endpoints: builder => ({
    getFeedback: builder.query({
      query: () => ({ url: '/api/feedback' }),
      providesTags: ['Feedback'],
    }),
    addFeedback: builder.mutation({
      query: values => ({
        url: 'api/feedback',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Feedback'],
    }),
    deleteFeedback: builder.mutation({
      query: id => ({
        url: `/api/feedback/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Feedback'],
    }),
  }),
});

export const {
  useGetFeedbackQery,
  useAddFeedbackMutation,
  useDeleteFeedbackMutation,
} = feedbackApi;
