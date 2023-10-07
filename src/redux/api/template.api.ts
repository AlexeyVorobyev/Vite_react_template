import {api} from './api'
export const templateApi = api.injectEndpoints({
    endpoints: (builder) => ({
        templateQuery: builder.query({
            query: (settings:{id:number}) => ({
                url:`someUrl${settings.id}`,
                method: 'GET',
                headers: {

                }
            }),
            providesTags:['tag1']
        }),
        templateMutation: builder.mutation({
            query: (settings:{id:number,body:never}) => ({
                url:`someUrl${settings.id}`,
                method: 'post',
                headers: {

                },
                body:settings.body
            }),
        })
    }),
    overrideExisting:false
})

export const {
    useTemplateQueryQuery,
    useLazyTemplateQueryQuery,
    useTemplateMutationMutation
} = templateApi