import React from "react";
import {Navigate, useSearchParams} from "react-router-dom";
import {useLoginStatus} from "../../functions/useLoginStatus";

const HandleRedirectPage:React.FC<any> = () => {
    const [searchParams] = useSearchParams()

    localStorage.setItem('accessToken',searchParams.get('accessToken')!)
    localStorage.setItem('refreshToken',searchParams.get('refreshToken')!)
    localStorage.setItem('expiry',searchParams.get('expiry')!)

    useLoginStatus()

    return <Navigate to={'/'}/>
}

export {HandleRedirectPage}