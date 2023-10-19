import {useActions} from "../../redux/hooks/useActions";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/store";

export const useLoginStatus = () => {

    const {setLogin} = useActions()
    const user = useSelector((state:RootState) => state.user)

    useEffect(() => {
        if (
            Boolean(localStorage.getItem('accessToken')) &&
            Boolean(localStorage.getItem('refreshToken')) &&
            Boolean(localStorage.getItem('expiry'))
        ) {
            console.log('logged')
            setLogin(true)
        }
        else {
            console.log('unlogged')
            setLogin(false)
        }
    },[user.is_auth])

}

