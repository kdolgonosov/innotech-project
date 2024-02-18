import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({
                page,
                category,
                searchString,
            }: {
                page: number;
                category?: string;
                searchString?: string;
            }) =>
                `${searchString && 'search'}${
                    category ? 'category/' + category + '?' : '?'
                }limit=9&skip=${9 * (page - 1)}${
                    searchString && '&q=' + searchString
                }&select=title,price,id,thumbnail`,
            serializeQueryArgs: ({ endpointName, queryArgs }) => {
                return `${endpointName}(${queryArgs.category})(${queryArgs.searchString})`;
            },
            merge: (currentData, responseData) => {
                currentData.page = responseData.page;
                currentData.products.push(...responseData.products);
            },
            forceRefetch({ currentArg, previousArg }) {
                if (!previousArg) return true;
                return (
                    currentArg!.page > previousArg.page ||
                    currentArg?.category !== previousArg?.category ||
                    currentArg?.searchString !== previousArg?.searchString
                );
            },
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;
