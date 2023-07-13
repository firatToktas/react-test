import { forwardRef,useRef } from "react";

//! ÖNEMLİ: forwardRef kullanırken önce props'u ikinci olarak ta ref'i almanız gerekiyor

function Input(props, ref){
    return <input ref={ref} type="text" {...props}/>
}
//jsx elemaları için ref kullnımı için forwardRef'i import etmemiz gerekiyor
Input=forwardRef(Input)

function Refde (){
    // html elmenaları için ref kullanımı 
    const inputRef=useRef()
    const focusInput=()=>{
        inputRef.current.focus()
    }
    return (
    <>
        <Input ref={inputRef}/>
        <button onClick={focusInput}>odaklan</button>
    </>
    )
}

export default Refde