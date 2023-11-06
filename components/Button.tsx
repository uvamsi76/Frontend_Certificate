import React from 'react'

type proptype={
    ButtonText:string,
    onClick:()=>void
}
const Button = (props:proptype) => {
  return (
    <button onClick={props.onClick}className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2.5 px-3 m-3 rounded" >
        {props.ButtonText}
    </button>
      
  )
}

export default Button