import React from 'react'

const InputComponent = ({name,onChange,className,type,id,placeholder,required}) => {
  return (
    <input name={name || ""} onChange={onChange || null} className={`${className || ""} w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]`} type={type} id={id || ""} placeholder={placeholder || ""} required={required || ""} />
  )
}

export default InputComponent