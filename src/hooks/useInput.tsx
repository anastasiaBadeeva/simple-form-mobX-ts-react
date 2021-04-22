import React from 'react'
import { useValidation } from './useValidation'

export const useInput = (initialValue :any ,validations :any) => {
   const [value, setValue] = React.useState<string>(initialValue)
   const [isDirty, setIsDirty] = React.useState(false)
   const valid = useValidation( {value, validations})
   const onChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
   setValue(e.target.value)
   }

   const onBlur = () =>{
    setIsDirty(true)
}
return{
    value,
    onBlur,
    onChange,
    isDirty,
   ...valid
}
}
