import React from "react";
import {useForm} from "react-hook-form";
import {CustomInput} from "../formUtils/CustomInput/CustomInput";
import {FormProvider} from "react-hook-form";
import {StyledButton} from "../StyledComponents/StyledButton";
import {Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


const SignIn:React.FC<any> = () => {

    const methods = useForm()
    const {handleSubmit, formState: {errors}} = methods
    const navigate = useNavigate()

    const onSubmit = (data:any) => {
        console.log(data)
        navigate('/')
    }

    return (
        <FormProvider {...methods} >
            <Grid container direction={"column"} rowGap={2}>
                <Grid item>
                    <CustomInput name={'login'} required={true} label={'LogIn'}
                                 error={Boolean(errors.login)}/>
                </Grid>
                <Grid item>
                    <CustomInput name={'password'} required={true} label={'Password'}
                                 error={Boolean(errors.password)}/>
                </Grid>
                <Grid container columnSpacing={2}>
                    <Grid xs={6} item>
                        <StyledButton color={'rgb(255, 85, 85)'} hoveredColor={'rgb(266, 110, 110)'}
                                      onClick={() => {
                                          navigate('../sign-up')
                                      }}>
                            <Typography color={"white"} variant={'subtitle1'}>SignUp if you dont have account</Typography>
                        </StyledButton>
                    </Grid>
                    <Grid xs={6} item>
                        <StyledButton color={'rgb(255, 85, 85)'} hoveredColor={'rgb(266, 110, 110)'} onClick={handleSubmit(onSubmit)}>
                            <Typography color={"white"} variant={'subtitle1'}>SignIn</Typography>
                        </StyledButton>
                    </Grid>
                </Grid>
            </Grid>
        </FormProvider>
    )
}

export {SignIn}
