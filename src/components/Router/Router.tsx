import {Navigate, Route, Routes} from "react-router-dom";
import {AuthPageLayout} from "../AuthPage/AuthPageLayout";
import {BasePagePlayground} from "../BasePagePlayground/BasePagePlayground";
import React from "react";
import {useLoginStatus} from "../functions/useLoginStatus";
import {SignIn} from "../AuthPage/SignIn";
import {SignUp} from "../AuthPage/SignUp";
import {LandingPage} from "../LandingPage/LandingPage";

const Router:React.FC = () => {
    const isAuth = useLoginStatus()

    return (
        <>
            {isAuth ? (
                <Routes>
                    <Route path={'/'} element={<Navigate to="/app/landing"/>} />
                    <Route path={'/app'} element={<BasePagePlayground/>}>
                        <Route path={'landing'} element={<LandingPage/>}/>
                    </Route>
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path={'/'} element={<Navigate to="/auth/sign-in"/>} />
                    <Route path={'/auth'} element={<AuthPageLayout/>}>
                        <Route path={'sign-in'} element={<SignIn/>}/>
                        <Route path={'sign-up'} element={<SignUp/>}/>
                    </Route>
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            )}
        </>
    )
}

export {Router}