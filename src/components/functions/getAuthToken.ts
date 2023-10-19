interface IGetTokensReturnValue {
    refreshToken:string | null,
    accessToken:string | null
}
export const getTokens = ():IGetTokensReturnValue => {
    return {
        refreshToken: localStorage.getItem('refreshToken'),
        accessToken: localStorage.getItem('accessToken')
    };
}