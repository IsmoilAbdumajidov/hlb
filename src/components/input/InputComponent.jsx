import { Field } from 'formik'
import React from 'react'

const InputComponent = ({name,onChange,className,typeInput,id,placeholder,required,refProp}) => {
  return (
    <input type={typeInput} name={name || ""} onChange={onChange}  className={`${className || ""} w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]`}  id={id || ""} placeholder={placeholder || ""} />
  )
}

export default InputComponent