"use client"
import Image from 'next/image'
import 'tailwindcss/tailwind.css';
import Input from '@/components/Input';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import { setCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router=useRouter()
  const [email,setEmail]=useState<String>()
  const [password,setPassword]=useState<String>()
  const [emailinput,setEmailinput]= useState<String>()
  const [passwordinput,setPasswordinput]= useState<String>()
  const handleonclick=async ()=>{
    setEmail(emailinput)
    setPassword(passwordinput)
    console.log("handleonclick")
    const apiurl ="http://ec2-16-171-225-150.eu-north-1.compute.amazonaws.com:3000/api/login"

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type based on your API requirements
      },
      body: JSON.stringify({email:email,password:password}),
    };
    try{
    const response=await axios.post(apiurl,{email:emailinput,password:passwordinput})
      const data = response.data
    if(!data.token){
      console.log("error")
    }
    const token=data.token
    console.log(token)
    setCookie("token",token,1)
    router.push("/getcertificateuser")
  }
  catch(error){
    console.log(error)
  }
}
  return (
    <div >
      <div className='min-h-screen flex items-center justify-center '>
        <div>
          <Input className="m-2" placeholder="Enter your Email here" type="text" Onchange={(e:any)=>setEmailinput(e.target.value)}/>
          <Input className="m-1" placeholder="Enter your Password here" type="password" Onchange={(e:any)=>setPasswordinput(e.target.value)}/>
        </div>
        {/* <Button ButtonText="Validate Email" onClick={async ()=>{await handleonclick}}/> */}
        <button onClick={async ()=>{await handleonclick()}}>button</button>
      </div>
    </div>
    )
}
