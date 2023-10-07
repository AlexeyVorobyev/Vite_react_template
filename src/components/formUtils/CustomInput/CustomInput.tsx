import React from "react";
import {FormControl, TextField} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";

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
}
export const CustomInput:React.FC<Props> =
    ({
        name,
        defaultValue,
        label,
        required = false,
        validateFunctions = undefined,
        error = false,
        errorText = undefined
    }) => {

    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            defaultValue={defaultValue || null}
            control={control}
            rules={{validate:{
                    required:required ? (value:string) => value?.length > 0 || 'required field' : () => true,
                    ...validateFunctions,
                }}}
            render={({field : {onChange, value}}) => (
                <FormControl fullWidth={true}>
                    <TextField
                        label={error && errorText ? `${label}, ${errorText}` : label}
                        value={value}
                        onChange={(event:any) => onChange(event.target.value)}
                        error={error}
                    />
                </FormControl>
            )
            }
        />
    )
}