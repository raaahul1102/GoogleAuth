import React,{useEffect} from 'react'
import {jwtDecode} from 'jwt-decode';

export const NextPage = () => {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');

    if (token) {
        // Decode the token to access its data
        const decodedToken = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);

        // Access user information from the decoded token
        const { user } = decodedToken;
        console.log('User Info:', user);

        // Store the token for future use (e.g., in localStorage)
        localStorage.setItem('token', token);
    } else {
        console.error('No token found in the URL');
    }
}, []);

  return (
    <div>
      NextPage
    </div>
  )
}
