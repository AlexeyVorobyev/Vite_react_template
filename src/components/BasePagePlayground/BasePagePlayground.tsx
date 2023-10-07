import React from "react";
import {Outlet} from "react-router-dom";
import {Background} from "../StyledComponents/Background";
const BasePagePlayground:React.FC<any> = () => {

    return (
        <Background>
            <Outlet/>
        </Background>
    )
}

export {BasePagePlayground}