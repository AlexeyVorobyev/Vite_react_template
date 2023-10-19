import React, {CSSProperties, useEffect, useState} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {UseLazyQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {debounce} from "../../functions/debounce";
import {CustomServerAutoCompleteEngine} from "./CustomServerAutoCompleteEngine";
import {Option} from "./CustomServerAutoCompleteEngine";

interface Props {
    name:string
    defaultValue?:Option
    label?:string
    useLazyGetQuery:UseLazyQuery<any>
    perPage?:number
    required?:boolean
    optionsConfig?: {
        optionsReadFunction: (option:any) => Option
        optionsPath: string[]
    }
    multiple?: boolean
    style?:CSSProperties
}
export const CustomServerAutoComplete:React.FC<Props> =
    ({
        name,
        defaultValue,
        label,
        useLazyGetQuery,
        perPage = 5,
        required = false,
        optionsConfig,
        multiple = false,
        style
    }) => {

    const { control } = useFormContext()
    const [inputValue, setInputValue] = React.useState('')
    const [options,setOptions] = useState<null | Array<any>>(null)
    const [lazyGetQuery, result] = useLazyGetQuery()
    const debouncedLazyGetQuery = debounce(lazyGetQuery,350)

    useEffect(() => {
        debouncedLazyGetQuery({page:0, size:perPage, name: inputValue})
    }, [inputValue])

    useEffect(() => {
        if (result.status !== 'fulfilled' || !result.currentData) return
        console.log(result.currentData)
        if (optionsConfig) {
            let options = result.currentData as any
            optionsConfig.optionsPath.map((path) => options = options[path])
            options.map((option: any) => optionsConfig.optionsReadFunction(option))
            setOptions(options as Array<Option>)
        }
        else {
            setOptions(result.currentData as Array<Option>)
        }
    },[result])


        return (
        <Controller
            name={name}
            defaultValue={defaultValue || ""}
            control={control}
            render={({field : {onChange, value}}) => (
                <CustomServerAutoCompleteEngine
                    value={value}
                    onChange={onChange}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    label={label}
                    options={options}
                    required={required}
                    multiple={multiple}
                    style={style}
                />)
            }
        />
    )
}