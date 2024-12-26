import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
const fetcher = (...args)=>fetch(...args).then((res)=> res.json());


export default  function NewFunc() {
  const [users, setUsers] = useState([]); // `users` will hold the fetched data.
  console.log('Users:', users);

  const {data , error} = useSWR ("https://dummyjson.com/users", fetcher);
  if(error){
    return <h1>Error occured</h1>
  }
  if(!data) return <h1>Loading ......</h1>

 

 return (
    <div>
      <h1>This is user's index</h1>
      <ul>
        {data.users.length > 0 ? (
          data.users.map((user) => (
            <li key={user.id}>
              <Link href={`/user/${user.id}`}>
                <a>{user.firstName}</a> {/* Link needs an anchor `<a>` element */}
              </Link>
            </li>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </ul>
    </div>
  );
}
