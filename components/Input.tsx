import React from 'react'
import 'tailwindcss/tailwind.css';

type proptype={
    placeholder:string,
    Onchange:Function,
    type:string,
    className?:string
}

const Input = (props:proptype) => {
    function handlechange (e:any){
        props.Onchange(e)
}
  return (
    <div className="">
      <input
        className={`w-full max-w-xs mx-auto w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring focus:border-blue-500 ${props.className}`}
        type={props.type}
        onChange={handlechange}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input