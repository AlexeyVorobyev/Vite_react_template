import React from "react";
import {useForm} from "react-hook-form";
import {CustomInput} from "../formUtils/CustomInput/CustomInput";
import {FormProvider} from "react-hook-form";
import {StyledButton} from "../StyledComponents/StyledButton";
import {Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useActions} from "../../redux/hooks/useActions";


const SignUp:React.FC<any> = () => {

    const methods = useForm()
    const {handleSubmit, watch, formState: {errors}} = methods
    const navigate = useNavigate()
    const passwordWatch = watch('password')
    const {setUserData} = useActions()

    const onSubmit = (data:any) => {
        console.log(data)
        setUserData(data)
    }

    return (
        <FormProvider {...methods} >
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
                                      onClick={() => {
                                          navigate('../sign-in')
                                      }}>
                            <Typography color={"white"} variant={'subtitle1'}>SignIn if you have account</Typography>
                        </StyledButton>
                    </Grid>
                    <Grid xs={6} item>
                        <StyledButton color={'rgb(255, 85, 85)'} hoveredColor={'rgb(266, 110, 110)'} onClick={handleSubmit(onSubmit)}>
                            <Typography color={"white"} variant={'subtitle1'}>SignUp</Typography>
                        </StyledButton>
                    </Grid>
                </Grid>
            </Grid>
        </FormProvider>
    )
}

export {SignUp}