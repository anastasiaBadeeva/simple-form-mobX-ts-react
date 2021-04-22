import React from 'react'

export const useValidation = (props :any) => {
    const { value, validations } = props
    const [isEmpty, setIsEmpty] = React.useState(true)
    const [inputValid, setInputValid] = React.useState(false)
    React.useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
            }
            
        }
        
    }, [value]);
    React.useEffect(() => {
       if (isEmpty) {
        setInputValid(false)
       }
       else{
        setInputValid(true)
       }
    }, [isEmpty])
    return{
        isEmpty,inputValid
    }
}
