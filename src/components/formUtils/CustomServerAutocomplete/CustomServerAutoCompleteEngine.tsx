import React, {CSSProperties} from "react";
import {Autocomplete, Box, FormControl, TextField} from "@mui/material";

export interface Option{
    id:any,
    name:any
}

interface Props {
    value:Option
    onChange:Function,
    inputValue:string,
    setInputValue:Function,
    label:string | undefined
    options:Array<Option> | null
    required:boolean
    multiple:boolean
    style?:CSSProperties

}
export const CustomServerAutoCompleteEngine:React.FC<Props> =
    ({
        value,
        onChange,
        inputValue,
        setInputValue,
        label,
        options,
        required,
        multiple,
        style
     }) => {

        return (
            <FormControl fullWidth>
                <Autocomplete
                    style={style}
                    multiple={multiple}
                    options={options || []}
                    autoHighlight
                    filterOptions={(x) => x}
                    value={value || null}
                    // @ts-ignore
                    onChange={(event, newValue) => {
                        onChange(newValue);
                    }}
                    inputValue={inputValue}
                    // @ts-ignore
                    getOptionLabel={(value:Option) => {
                        return value.name
                    }}
                    // @ts-ignore
                    onInputChange={(event,value) => {
                        setInputValue(value)
                    }}
                    renderOption={(props, option) => {
                        return (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} key={option.id}>
                                {option.name}
                            </Box>)
                        }
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label || 'no label'}
                            inputProps={{
                                ...params.inputProps,
                            }}
                            required={required}
                        />
                    )}
                />
            </FormControl>
        )
    }