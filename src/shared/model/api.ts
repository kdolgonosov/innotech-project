import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from 'shared/model/interface';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: (arg: void) => 'categories',
    }),
    getTopProductsByCategory: builder.query({
      query: ({ category }: { category: string }) => `category/${category}`,
      // transformResponse: (response: any) =>
      //     response.products
      //         .sort((a: IProduct, b: IProduct) => b.rating - a.rating)
      //         .slice(0, 3),
      transformResponse: ({ products }: { products: IProduct[] }) =>
        products
          .sort((a: IProduct, b: IProduct) => b.rating - a.rating)
          .slice(0, 3),
    }),
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
    getProduct: builder.query({
      query: ({ id }: { id: string }) => id,
    }),
    updateProduct: builder.mutation<
      void,
      Pick<IProduct, 'id'> & Partial<IProduct>
    >({
      query: ({ id, ...formData }: { id: string; formData: IProduct }) => ({
        url: id,
        method: 'PATCH',
        body: formData,
      }),
      onQueryStarted(
        { id, ...formData }: { id: string; formData: IProduct },
        { dispatch, queryFulfilled },
      ) {
        const patchResult = dispatch(
          productsApi.util.updateQueryData('getProduct', { id }, (draft) => {
            Object.assign(draft, formData);
          }),
        );
        queryFulfilled.catch(patchResult.undo);
      },
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useLazyGetTopProductsByCategoryQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
} = productsApi;
