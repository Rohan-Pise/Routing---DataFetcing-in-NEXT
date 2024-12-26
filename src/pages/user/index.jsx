import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NewFunc() {
  const [users, setUsers] = useState([]); // `users` will hold the fetched data.
  console.log('Users:', users);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('https://dummyjson.com/users'); 
        const data = await response.json();
        setUsers(data.users); // Use `data.users` because the API response has a `users` key.
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUser();
  }, []);

 return (
    <div>
      <h1>This is user's index</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
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
