import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyFunc() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null); // Initialize state with null to represent the loading state
  const [loading, setLoading] = useState(true); // Loading state to manage when data is being fetched
  const [error, setError] = useState(null); // To capture any fetch errors

  useEffect(() => {
    const { id } = router.query;

    // Check if the `id` is available before making the API call
    if (!id) return;

    async function getUserById(id) {
      setLoading(true); // Set loading to true before the fetch starts
      setError(null); // Reset any previous errors

      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserInfo(data); // Set the user data to state
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false once fetch is completed
      }
    }

    getUserById(id);
  }, [router.query.id]);

  // Render loading, error, or the user data
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userInfo) {
    return <p>User not found</p>;
  }

  return (
    <>
    <div>
      <h1>This page is a dynamic page for {userInfo.firstName} {userInfo.lastName}</h1>
      <p>Email: {userInfo.email}</p>
      <p>Phone: {userInfo.phone}</p>
      <p>Education : {userInfo.university}</p>
      <p>Title : {userInfo.company.title}</p>
      {/* Render more user data as needed */}
      <div className='flex justify-center m-4 bg-slate-200 text-black '>
      <button onClick={(e)=>router.push(`/user`)}
      >Return to user's page</button>
      </div>
    </div>
    </>
  );
}
