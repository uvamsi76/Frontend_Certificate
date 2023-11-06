"use client"
import React, { useEffect, useState } from 'react'
import {getCookie} from "../../utils/cookie"
import axios from 'axios'
import Button from '@/components/Button'
import Link from 'next/link'
const index = () => {
  console.log("index")
  const [user,setUser]=useState<string>()
  const [hash,setHash]=useState<string>()
  const handlegetcert =async ()=>{
    const token=getCookie("token")
    const apiurl ="http://ec2-16-171-225-150.eu-north-1.compute.amazonaws.com:3000/api/generatecerificate"
    // const apiurl ="http://localhost:3000/api/generatecerificate"
    const config = {
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'application/json',
        // Add other headers as needed
      },
    };
    const d = {
      key1: 'value1',
      key2: 'value2',
      // Add other data as needed
    };
    console.log(config)
    const responce=await axios.post(apiurl,d, config)
    const data = responce.data
    if(!data.certificate && data.firstname){
      console.log("error")
    }
    const u=JSON.stringify(data.hash)
    console.log(u)
    setUser(u)
    setHash(data.hash)
}
if(!user){
  return<div><Button ButtonText='Get Certificate' onClick={()=>handlegetcert()}/></div>
}
  return (
    <div>
      {hash}
    </div>
  )
}

export default index