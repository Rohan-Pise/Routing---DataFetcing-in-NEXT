import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from "swr";
const fetcher = (...args)=>fetch(...args).then((res)=>res.json());

export default function MyFunc() {
  const router = useRouter();
 
  const id  = router.query.id;
  const {data , error} = useSWR(`https://dummyjson.com/users/${id}`,fetcher);

  if(error){
    return <h1>Error occured</h1>
  }
  if(!data){
    return <h1>Loading.......</h1>
  }



  return (
    <>
    <div>
      <h1>This page is a dynamic page for {data.firstName} {data.lastName}</h1>
      <p>Name : {data.firstName} {data.lastName} </p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Education : {data.university}</p>
      <p>Title : {data.company.title}</p>
      {/* Render more user data as needed */}
      <div className='flex justify-center m-4 bg-slate-200 text-black rounded-md'>
      <button onClick={(e)=>router.push(`/user`)}
      >Return to user's page</button>
      </div>
    </div>
    </>
  );
}
