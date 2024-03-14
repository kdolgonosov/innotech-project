import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: (arg: void) => 'products/categories',
        }),
    }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
