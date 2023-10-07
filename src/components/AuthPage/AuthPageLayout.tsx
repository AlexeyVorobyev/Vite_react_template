import React from "react";
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {Background} from "../StyledComponents/Background";


const AuthFormWrapper = styled.div`
  width: 600px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
`

const AuthPageLayout:React.FC<any> = () => {
    return (
        <Background centered={true} color={'#000000'}>
            <AuthFormWrapper>
                <Outlet/>
            </AuthFormWrapper>
        </Background>
    )
}

export {AuthPageLayout}