import React from "react";
import {useForm} from "react-hook-form";
import {CustomInput} from "../formUtils/CustomInput/CustomInput";
import {FormProvider} from "react-hook-form";
import {StyledButton} from "../StyledComponents/StyledButton";
import {Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


const SignIn:React.FC<any> = () => {

    const methods = useForm()
    const {handleSubmit} = methods
    const navigate = useNavigate()

    const onSubmit = (data:any) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction={"column"} rowGap={2}>
                    <Grid item>
                        <CustomInput name={'login'} required={true} label={'LogIn'}/>
                    </Grid>
                    <Grid item>
                        <CustomInput name={'password'} required={true} label={'Password'}/>
                    </Grid>
                    <Grid container columnSpacing={2}>
                        <Grid xs={6} item>
                            <StyledButton color={'rgb(255, 85, 85)'} hoveredColor={'rgb(266, 110, 110)'}
                                          onClick={(event) => {
                                              event.preventDefault()
                                              navigate('../sign-up')
                                          }}>
                                <Typography color={"white"}>SignUp if you dont have account</Typography>
                            </StyledButton>
                        </Grid>
                        <Grid xs={6} item>
                            <StyledButton color={'rgb(255, 85, 85)'} hoveredColor={'rgb(266, 110, 110)'}>
                                <Typography color={"white"}>SignIn</Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    )
}

export {SignIn}
