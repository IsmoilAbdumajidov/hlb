import React, { useEffect, useState } from 'react'
import { postingRegister } from '../../hooks/PostingRegistration'
const inputStyle = "w-full bg-gray-50 rounded-md py-3  focus:outline-[#FF663B]"
import Input from 'react-phone-number-input/input'
import PassInput from '../../components/input/PassInput'
import { useNavigate } from 'react-router-dom'
import InputComponent from '../../components/input/InputComponent'

const initialValue = {
    user: {
        username: "",
        password: ""
    },
    full_name: "",
    phone_number: "",
    passport_data: ""
}

const SignUp = () => {

    const [inputsValue, setInputsValue] = useState(initialValue)

    const inputHandler = (name, value, isObj) => {
        setInputsValue(prev => (isObj ? { ...prev, user: { ...prev.user, [name]: value } } : { ...prev, [name]: value }))
    }
    const navigate = useNavigate()
    const [passwValue, setPasswValue] = useState("")
    const [ischekked, setIschekked] = useState()
    const { mutate } = postingRegister({ navigate })

    const registerHandler = async (e) => {
        e.preventDefault()
        mutate(inputsValue)
    }

    useEffect(() => {
        if (passwValue.length && inputsValue.user.password.length) {
            if (inputsValue.user.password === passwValue) {
                setIschekked(true)
            }
            else {
                setIschekked(false)
            }
        }
        else {
            setIschekked("")
        }
    }, [passwValue, inputsValue.user.password])

    return (

        <div className='bg-white shadow-lg rounded-xl  p-7'>
            <h1 className='text-2xl font-bold mb-5'>Ro'yxatdan o'tish</h1>
            <form onSubmit={ischekked ? registerHandler : undefined} className='flex flex-col gap-4'>
                <div>
                    <label className='text-sm' htmlFor="fio">F.I.O</label>
                    {/* <input onChange={(e) => inputHandler(e.target.name, e.target.value, false)} name='full_name' className={inputStyle} type="text" id='fio' placeholder='F.I.O ni kiring' required /> */}
                    <InputComponent onChange={(e) => inputHandler(e.target.name, e.target.value, false)} name='full_name' type="text" id='fio' placeholder='F.I.O ni kiring' required={true} />
                </div>
                <div>
                    <label className='text-sm' htmlFor="username">Username</label>
                    {/* <input onChange={(e) => inputHandler(e.target.name, e.target.value.toLowerCase(), true)} name='username' className={`${inputStyle} lowercase`} type="text" id='username' placeholder='Usernameni kiring' required /> */}
                    <InputComponent onChange={(e) => inputHandler(e.target.name, e.target.value.toLowerCase(), true)} name='username' className={`lowercase`} type="text" id='username' placeholder='Usernameni kiring' required={true} />
                </div>
                <div>
                    <label className='text-sm' htmlFor="number">Telefon</label>
                    <Input maxLength={17} value={"+998"} id={"number"} className={inputStyle} placeholder="+998 99 123 45 67" onChange={(e) => { inputHandler("phone_number", e, false) }} required />
                </div>
                <div>
                    <label className='text-sm' htmlFor="password">Parol</label>
                    <PassInput onChange={(e) => inputHandler(e.target.name, e.target.value, true)} name={"password"} id={"password"} placeholder={"Parolingizni kiriting"} className={inputStyle} required />
                </div>
                <div>
                    <label className='text-sm' htmlFor="password1">Parol</label>
                    <PassInput onChange={(e) => setPasswValue(e.target.value)} id={"password1"} placeholder={"Parolingizni takrorlang"} className={inputStyle} required />
                    {ischekked === false ? <p className='text-sm text-red-500 mt-3'>Parollar bir xil kiritlmadi</p> : ""}
                </div>
                <button type='submit' disabled={inputsValue.user.password && inputsValue.user.username && inputsValue.full_name && inputsValue.phone_number && ischekked ? false : true} className='bg mt-4 disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:shadow-none rounded-md py-3 hover:shadow-lg hover:shadow-[#FF663B] text-white '>Kirish</button>
            </form>
        </div>

    )
}

export default SignUp