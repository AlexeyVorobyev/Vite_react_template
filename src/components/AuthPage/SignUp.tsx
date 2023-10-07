import React from "react";
import {useForm} from "react-hook-form";
import {CustomInput} from "../formUtils/CustomInput/CustomInput";
import {FormProvider} from "react-hook-form";
import {StyledButton} from "../StyledComponents/StyledButton";
import {Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


const SignUp:React.FC<any> = () => {

    const methods = useForm()
    const {handleSubmit, watch, formState: {errors}} = methods
    const navigate = useNavigate()
    const passwordWatch = watch('password')

    const onSubmit = (data:any) => {
        console.log(data)
    }

    return (
        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction={"column"} rowGap={2}>
                    <Grid item>
                        <CustomInput name={'login'} required={true} label={'LogIn'}
                                     error={Boolean(errors.login)} errorText={errors.login?.message as string | undefined}/>
                    </Grid>
                    <Grid item>
                        <CustomInput name={'password'} required={true} label={'Password'}
                                     error={Boolean(errors.password)} errorText={errors.password?.message as string | undefined}/>
                    </Grid>
                    <Grid item>
                        <CustomInput name={'passwordCheck'} required={true} label={'Repeat password'}
                                     validateFunctions={{
                                         passwordCheck:(valueToCheck:string) => (valueToCheck === passwordWatch) || 'passwords doesnt match'
                                     }}
                                     error={Boolean(errors.passwordCheck)} errorText={errors.passwordCheck?.message as string | undefined}/>
                    </Grid>
                    <Grid container columnSpacing={2}>
                        <Grid xs={6} item>
                            <StyledButton color={'rgb(255, 85, 85)'} hoveredColor={'rgb(266, 110, 110)'}
                                          onClick={(event) => {
                                              event.preventDefault()
                                              navigate('../sign-in')
                                          }}>
                                <Typography color={"white"}>SignIn if you have account</Typography>
                            </StyledButton>
                        </Grid>
                        <Grid xs={6} item>
                            <StyledButton color={'rgb(255, 85, 85)'} hoveredColor={'rgb(266, 110, 110)'}>
                                <Typography color={"white"}>SignUp</Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    )
}

export {SignUp}