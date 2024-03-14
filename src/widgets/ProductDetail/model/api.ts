import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }: { id: string }) => id,
            // serializeQueryArgs: ({ endpointName, queryArgs }) => {
            //     return `${endpointName}(${queryArgs.category})(${queryArgs.searchString})`;
            // },
            // merge: (currentData, responseData) => {
            //     currentData.page = responseData.page;
            //     currentData.products.push(...responseData.products);
            // },
            // forceRefetch({ currentArg, previousArg }) {
            //     if (!previousArg) return true;
            //     return (
            //         currentArg!.page > previousArg.page ||
            //         currentArg?.category !== previousArg?.category ||
            //         currentArg?.searchString !== previousArg?.searchString
            //     );
            // },
        }),
    }),
});

export const { useGetProductQuery } = productApi;
