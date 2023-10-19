import {Navigate, Route, Routes} from "react-router-dom";
import {AuthPageLayout} from "../AuthPage/AuthPageLayout";
import React from "react";
import {useLoginStatus} from "../functions/useLoginStatus";
import {SignIn} from "../AuthPage/SignIn";
import {SignUp} from "../AuthPage/SignUp";
import {HandleRedirectPage} from "../HandleRedirectPage/handleRedirectPage";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/store";
import {AwaitMail} from "../AuthPage/AwaitMail";

const Router:React.FC = () => {
    const user = useSelector((state:RootState) => state.user)
    useLoginStatus()

    return (
        <>
            {user.is_auth ? (
                <Routes>
                    <Route path={'/'} element={<Navigate to="/app/landing"/>} />
                    {/*<Route path={'/handleRedirect'} element={<HandleRedirectPage/>}/>*/}
                    {/*<Route path={'/app'}>*/}
                    {/*    <Route path={'landing'} element={<LandingPage/>}/>*/}
                    {/*    <Route path={'analytics'} element={<AnalyticsPage/>}/>*/}
                    {/*</Route>*/}
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