import React from "react";
import {useForm} from "react-hook-form";
import {CustomInput} from "../../formUtils/CustomInput/CustomInput";
import {FormProvider} from "react-hook-form";
import {Button, Divider, Stack, Typography} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import {validEmail, validPassword} from "../../formUtils/Regex/regex";
import {theme} from "../../Theme/theme";
import {useAuthSignUpMutation} from "../../../redux/api/auth.api";


const SignUp:React.FC<any> = () => {

    const methods = useForm()
    const {handleSubmit, watch, formState: {errors}} = methods
    const passwordWatch = watch('password')
    const [authSignUp] = useAuthSignUpMutation()
    const navigate = useNavigate()

    const onSubmit = (data:any) => {
        console.log(data)
        data.redirectUrl = `${import.meta.env.VITE_APP_FRONT_HOST}/handleRedirect`
        delete data.passwordCheck

        authSignUp(data)
            .then((response) => {
                console.log(response)
                navigate('../await-mail')
            })
    }

    return (
        <FormProvider {...methods} >
            <Stack direction={'column'} justifyContent={'center'} spacing={2}>
                <CustomInput name={'email'} required={true} label={'Почта'}
                             error={Boolean(errors.email)}
                             errorText={errors.email?.message as string | undefined}
                             validateFunctions={{
                                 regex:(valueToCheck:string) => (validEmail.test(valueToCheck)) || 'Некорректный формат почты'
                             }}/>

                <CustomInput name={'password'} required={true} label={'Пароль'} hidden
                             error={Boolean(errors.password)}
                             errorText={errors.password?.message as string | undefined}
                             validateFunctions={{
                                 regex:(valueToCheck:string) => (validPassword.test(valueToCheck)) || '8 символов, заглавная и строчная буква'
                             }}/>

                <CustomInput name={'passwordCheck'} required={true} label={'Повторите пароль'} hidden
                             validateFunctions={{
                                 passwordCheck:(valueToCheck:string) => (valueToCheck === passwordWatch) || 'Пароли не совпадают',
                                 regex:(valueToCheck:string) => (validPassword.test(valueToCheck)) || 'Пароль должен содержать 8 символов, заглавную и строчную букву'
                             }}
                             error={Boolean(errors.passwordCheck)} errorText={errors.passwordCheck?.message as string | undefined}/>

                <Button
                    size={'large'}
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}>Зарегестрироваться</Button>

                <Divider orientation={"horizontal"} variant={'middle'}>
                    <Typography variant={'subtitle1'} textAlign={'center'}>ИЛИ</Typography>
                </Divider>

                <Typography variant={'subtitle1'} textAlign={'center'}>
                    Уже зарегистрированы?
                    <NavLink to={'../sign-in'} style={{textDecoration:'none', color:theme.palette.primary.main}}><br/>Войдите</NavLink>
                </Typography>
            </Stack>
        </FormProvider>
    )
}

export {SignUp}