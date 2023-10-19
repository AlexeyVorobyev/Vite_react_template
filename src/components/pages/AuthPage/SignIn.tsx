import React from "react";
import {useForm} from "react-hook-form";
import {FormProvider} from "react-hook-form";
import {Button, Divider, Typography, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";
import {CustomInput} from "../../formUtils/CustomInput/CustomInput";
import {theme} from "../../Theme/theme";
import {useAuthLoginMutation} from "../../../redux/api/auth.api";
import {LoginResponseCodeDecrypt} from "../../../redux/api/types/auth";
import {useActions} from "../../../redux/hooks/useActions";
import vkSvg from '../../../assets/vk.svg'
import telegramSvg from '../../../assets/telegram.svg'

const SignIn:React.FC<any> = () => {

    const methods = useForm()
    const {handleSubmit, formState: {errors}} = methods
    const [authLogin] = useAuthLoginMutation()
    const {setLogin} = useActions()

    const onSubmit = (data:any) => {
        console.log(data)
        const promise = authLogin(data)
        promise
            .then((response) => {
                console.log(response)
                if (response.hasOwnProperty('data')) {
                    console.log('gere')
                    // @ts-ignore
                    localStorage.setItem('accessToken',response.data.response.accessToken)
                    // @ts-ignore
                    localStorage.setItem('refreshToken',response.data.response.refreshToken)
                    // @ts-ignore
                    localStorage.setItem('expiry',response.data.response.expiry)
                    setLogin(true)
                }
                else {
                    // @ts-ignore
                    alert(LoginResponseCodeDecrypt[response.error.data.code])
                }
            })
    }

    return (
        <FormProvider {...methods} >
            <Stack direction={'column'} justifyContent={'center'} spacing={2}>
                <CustomInput name={'email'} required label={'Почта'}
                             error={Boolean(errors.login)} errorText={errors.login?.message as string | undefined}/>

                <CustomInput name={'password'} required label={'Пароль'} hidden
                             error={Boolean(errors.password)} errorText={errors.password?.message as string | undefined}/>

                <Button size={'large'} variant="contained"
                        onClick={handleSubmit(onSubmit)}>ВОЙТИ</Button>

                <Divider orientation={"horizontal"} variant={'middle'}>
                    <Typography variant={'subtitle1'} textAlign={'center'}>ИЛИ</Typography>
                </Divider>

                <Stack spacing={1} alignItems={'center'} alignSelf={'center'}>
                    <Typography variant={'subtitle1'} textAlign={'center'}>Авторизуйтесь через</Typography>
                    <Stack spacing={1} direction={'row'}>
                        <a href={import.meta.env.VITE_APP_API_HOST + '/api/oauth2/authorize/vk?redirect_uri=' + `${import.meta.env.VITE_APP_FRONT_HOST}/handleRedirect`}>
                            <img src={vkSvg} alt={'vk'} style={{width:'48px',height:'48px',cursor:'hover'}}/>
                        </a>
                        <a href={import.meta.env.VITE_APP_API_HOST + '/api/auth/telegram/login?redirectUrl=' + `${import.meta.env.VITE_APP_FRONT_HOST}/handleRedirect`}>
                            <img src={telegramSvg} alt={'telegram'} style={{width:'48px',height:'48px',cursor:'hover'}}/>
                        </a>
                    </Stack>
                </Stack>

                <Divider orientation={"horizontal"} variant={'middle'}>
                    <Typography variant={'subtitle1'} textAlign={'center'}>ИЛИ</Typography>
                </Divider>

                <Typography variant={'subtitle1'} textAlign={'center'}>
                    Нет аккаунта?
                    <NavLink to={'../sign-up'} style={{textDecoration:'none',color:theme.palette.primary.main}}><br/>Зарегистрируйтесь</NavLink>
                </Typography>
            </Stack>
        </FormProvider>
    )
}

export {SignIn}
