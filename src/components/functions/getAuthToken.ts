interface ReturnValue {
    refreshToken:string | null,
    accessToken:string | null
}
export const getTokens = ():ReturnValue => {
    return {
        refreshToken: localStorage.getItem('refreshToken'),
        accessToken: localStorage.getItem('accessToken')
    };
}