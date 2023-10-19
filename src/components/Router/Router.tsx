import {Navigate, Route, Routes} from "react-router-dom";
import {AuthPageLayout} from "../pages/AuthPage/AuthPageLayout";
import React from "react";
import {useLoginStatus} from "../functions/useLoginStatus";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/store";
import {HandleRedirectPage} from "../pages/HandleRedirectPage/handleRedirectPage";
import {AwaitMail} from "../pages/AuthPage/AwaitMail";
import {SignIn} from "../pages/AuthPage/SignIn";
import {SignUp} from "../pages/AuthPage/SignUp";

const Router:React.FC = () => {
    const user = useSelector((state:RootState) => state.user)
    useLoginStatus()

    return (
        <>
            {user.is_auth ? (
                <Routes>
                    <Route path={'/'} element={<Navigate to="/app/landing"/>} />
                    <Route path={'/handleRedirect'} element={<HandleRedirectPage/>}/>
                    <Route path={'/app'}>
                        <Route path={'landing'} element={<div/>}/>
                    </Route>
                    <Route path='*' element={<Navigate to='/app/landing'/>}/>
                </Routes>
            ) : (
                <Routes>
                    <Route path={'/handleRedirect'} element={<HandleRedirectPage/>}/>
                    <Route path={'/'} element={<Navigate to="/auth/sign-in"/>} />
                    <Route path={'/auth'} element={<AuthPageLayout/>}>
                        <Route path={'await-mail'} element={<AwaitMail/>}/>
                        <Route path={'sign-in'} element={<SignIn/>}/>
                        <Route path={'sign-up'} element={<SignUp/>}/>
                    </Route>
                    <Route path='*' element={<Navigate to='/auth/sign-in' />} />
                </Routes>
            )}
        </>
    )
}

export {Router}