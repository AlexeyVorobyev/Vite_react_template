import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getTokens} from "../../components/functions/getAuthToken";
import {useAuthRefreshMutation} from "./auth.api";
import {RefreshResponse} from "./types/auth";

const disabledAuthTokenEndpoints = [
    'authSignUp','authRefresh','authLogin'
]
export const api = createApi({
    reducerPath:'api',
    tagTypes:['tag1','tag2'],
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_APP_API_HOST,
        prepareHeaders: (headers,api) => {
            if (disabledAuthTokenEndpoints.includes(api.endpoint)) {
                return headers
            }
            if (Number(localStorage.getItem('expiry')) < new Date().getTime()) {
                const [authRefresh] = useAuthRefreshMutation()
                authRefresh({refreshToken:getTokens().refreshToken!})
                    .then((response) => {
                        if (response.hasOwnProperty('data')) {
                            // @ts-ignore
                            const successRefreshResponse = response.data as RefreshResponse
                            localStorage.setItem('accessToken',successRefreshResponse.response.accessToken)
                            localStorage.setItem('refreshToken',successRefreshResponse.response.refreshToken)
                            localStorage.setItem('expiry',successRefreshResponse.response.expiry.toString())
                            headers.set('Authorization',`Bearer ${successRefreshResponse.response.accessToken}`)
                        }
                        else {
                            // TODO "Логика в случае проблем с рефрешТокеном"
                        }
                    })
            }
            else {
                headers.set('Authorization',`Bearer ${getTokens().accessToken}`)
                return headers
            }
        }
    }),
    endpoints: () => ({})
})
