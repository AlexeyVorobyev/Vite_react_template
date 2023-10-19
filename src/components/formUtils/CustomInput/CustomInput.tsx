import React, {useState} from "react";
import {FormControl, IconButton, TextField, InputAdornment} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import {Visibility, VisibilityOff} from "@mui/icons-material";

interface Props {
    name:string
    defaultValue?:string
    label?:string
    required?: boolean
    validateFunctions?:{
        [key: string]:(valueToCheck:string) => boolean | string
    }
    error?: boolean,
    errorText?:string
    hidden?:boolean
}
const CustomInput:React.FC<Props> = ({
    name,
    defaultValue,
    label,
    required = false,
    validateFunctions = undefined,
    error = false,
    errorText = undefined,
    hidden = false
}) => {

    const { control } = useFormContext()

    const [showPassword, setShowPassword] = useState<boolean>(!hidden);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            rules={{validate:{
                    required:required ? (value:string) => value?.length > 0 || 'обязательное поле' : () => true,
                    ...validateFunctions,
                }}}
            render={({field : {onChange, value}}) => (
                <FormControl fullWidth>
                    <TextField
                        type={showPassword ? "text" : "password"}
                        label={error && errorText ? `${label}, ${errorText}` : label}
                        value={value}
                        onChange={(event:any) => onChange(event.target.value)}
                        error={error}
                        InputProps={{
                            endAdornment: hidden ? (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ) : null
                        }}
                    />
                </FormControl>
            )
            }
        />
    )
}

export {CustomInput}