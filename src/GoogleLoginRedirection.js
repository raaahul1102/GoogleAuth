import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleLoginRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');
         console.log(token);
        if (token) {
            localStorage.setItem('token', token); // Store the token securely
            navigate('/verify'); // Redirect to the onebox screen (or another page)
        } else {
            console.error('No token found in the URL');
            // Optionally redirect to login page or show an error
            navigate('/');
        }
    }, [navigate]);

    return <div>Loading...</div>; // Show a loading indicator while processing
}

export default GoogleLoginRedirect;
