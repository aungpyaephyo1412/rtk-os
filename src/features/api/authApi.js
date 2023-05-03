
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const AuthApi = createApi({
    reducerPath : "authApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://fakestoreapi.com'}),
    tagTypes:['Auth'],
    endpoints:builder => ({
        getProducts:builder.query({
            query: () => '/products',
        }),
        getProductById:builder.query({
            query:(id) => `/products/${id}`
        }),
        getProductByName:builder.query({

            query:(name) =>  `/products/${name}`
        })
    }),
})
export const {useGetProductsQuery,useGetProductByIdQuery,useGetProductByNameQuery} = AuthApi