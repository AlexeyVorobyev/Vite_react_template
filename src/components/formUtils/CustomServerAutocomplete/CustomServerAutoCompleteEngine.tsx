import React from "react";
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
        multiple
     }) => {

        return (
            <FormControl fullWidth={true}>
                <Autocomplete
                    freeSolo={true}
                    multiple={multiple}
                    options={options || []}
                    autoHighlight
                    filterOptions={(x) => x}
                    value={value || null}
                    onChange={(newValue) => {
                        onChange(newValue)
                    }}
                    inputValue={inputValue}
                    onInputChange={(newInputValue) => {
                        setInputValue(newInputValue)
                    }}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} key={option.id}>
                            {option.name}
                        </Box>
                    )}
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