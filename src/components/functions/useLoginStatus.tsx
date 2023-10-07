import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/store";

export const useLoginStatus = (): boolean => {
    const user = useSelector((state:RootState) => state.user)
    return user.is_auth
}

