import React from 'react';

export async function getServerSideProps(context){
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();

  return{
    props:{
      users:data.users
    },
  };
}

export default function userPage({users}){
  return(
    <>
    <div>
      <h1>User's List </h1>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
    </>
  );
}