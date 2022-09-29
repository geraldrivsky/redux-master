import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    fetchAllPosts: builder.query<IPost[], number>({
      query: (limit = 5) => ({
        url: 'posts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ['Post'],
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: post => ({
        url: 'posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: () => ['Post'],
    }),
    updatePost: builder.mutation<IPost, IPost>({
      query: post => ({
        url: `posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: () => ['Post'],
    }),
    removePost: builder.mutation<IPost, IPost>({
      query: post => ({
        url: `posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['Post'],
    }),
  }),
});
