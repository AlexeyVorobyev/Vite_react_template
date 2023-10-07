import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const api = createApi({
    reducerPath:'api',
    tagTypes:['tag1','tag2'],
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_APP_API_HOST,
    }),
    endpoints: () => ({})
})
