"use client"
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../../api/apiSlice";

const baseEndPoint = process.env.NEXT_PUBLIC_NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BACKEND_PROD : process.env.NEXT_PUBLIC_BACKEND_DEV;

export const authApiSlice = apiSlice.injectEndpoints({
    baseQuery: fetchBaseQuery({ baseUrl: baseEndPoint }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/user/login",
                method: "POST",
                body: credentials,
            })
        })
    })
})

export const userCreateApiSlice = apiSlice.injectEndpoints({
    baseQuery: fetchBaseQuery({ baseUrl: baseEndPoint }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (user) => ({
                url: "/users/create",
                method: "POST",
                body: user,
            }),
        }),
    })
})

export const { useLoginMutation } = authApiSlice;

export const { useCreateUserMutation } = userCreateApiSlice;