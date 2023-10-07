import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";

interface Value {
    id:string,
    name:string | number
}
interface Props {
    name:string
    defaultValue?:Value
    label?:string
    options:Array<Value>
}
export const CustomSelect:React.FC<Props> =
    ({
        name,
        defaultValue,
        label,
        options
    }) => {

    const { control } = useFormContext()
    const _onChange = (event:any,onChange:Function) => {
        const value = event.target.value
        console.log(value)
        for (const option of options) {
            if (option.id === value) {
                onChange(option)
                break
            }
        }
    }

    return (
        <Controller
            name={name}
            defaultValue={defaultValue || ""}
            control={control}
            render={({field : {onChange, value}}) => (
                <FormControl fullWidth={true}>
                    <InputLabel>{label || ""}</InputLabel>
                    <Select
                        value={value?.id}
                        label={label || null}
                        onChange={(event) => _onChange(event,onChange)}
                    >
                        {options.map((value) => <MenuItem value={value.id}>{value.name}</MenuItem>)}
                    </Select>
                </FormControl>
            )
            }
        />
    )
}