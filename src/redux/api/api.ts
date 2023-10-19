import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getTokens} from "../../components/functions/getAuthToken";
import {useAuthRefreshMutation} from "./auth.api";

const disabledAuthTokenEndpoints = [
    'authSignUp','authRefresh','authLogin'
]
export const api = createApi({
    reducerPath:'api',
    tagTypes:['tag1','tag2'],
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_APP_API_HOST,
        prepareHeaders: (headers,api) => {
            if (!disabledAuthTokenEndpoints.includes(api.endpoint)) {
                if (Number(localStorage.getItem('accessToken')) < new Date().getTime()) {
                    const [authRefresh] = useAuthRefreshMutation()
                    authRefresh({refreshToken:localStorage.getItem('refreshToken')!})
                        .then((response) => {
                            if (response.hasOwnProperty('data')) {
                                // @ts-ignore
                                localStorage.setItem('accessToken',response.data.response.accessToken)
                                // @ts-ignore
                                localStorage.setItem('refreshToken',response.data.response.refreshToken)
                                // @ts-ignore
                                localStorage.setItem('expiry',response.data.response.expiry)
                                headers.set('Authorization',`Bearer ${getTokens().accessToken}`)
                            }
                        })
                }
                else {
                    headers.set('Authorization',`Bearer ${getTokens().accessToken}`)
                    return headers
                }
            }
            else return headers
        }
    }),
    endpoints: () => ({})
})
