"use client"
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const publicpage = ({params}:{params:{hash:string}}) => {
  const[user,setuser]=useState<string>()
  const [certificate,setcertificate]=useState<string>()
  const send=async ()=>{
    const hash=params.hash
    const body={
      "hash":hash
    }
  const apiurl ="http://ec2-16-171-225-150.eu-north-1.compute.amazonaws.com:3000/api/getcertificate/"+hash
  // const apiurl ="http://localhost:3000/api/getcertificate/"+hash
  const response=await axios.get(apiurl)
  const data = response.data
  if(!data.certificate){
    console.log("error")
  }
  const u=JSON.stringify(data)
  console.log(u)
  setuser(u)
  setcertificate(data.certificate)
}
  useEffect(()=>{
    send()
  },[])
  if(!certificate){
    return <div>
      Loading ...
    </div>
  }
  return (
    <div>
      <a>{user}</a>
      <img src={certificate} alt='certificate'/>
    </div>
  )
}

export default publicpage