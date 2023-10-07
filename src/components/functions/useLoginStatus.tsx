import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/store";
import {useEffect, useState} from "react";

export const useLoginStatus = (): boolean => {
    const user = useSelector((state:RootState) => state.user)

    const [isAuth,setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        setIsAuth(user.is_auth)
    },[user.is_auth])

    return isAuth
}

