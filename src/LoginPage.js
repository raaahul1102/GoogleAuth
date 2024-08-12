import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LoginPage.css';

function LoginPage() {
    const handleOnClick = () => {
        const redirectUrl = encodeURIComponent('http://localhost:3000/verify'); // Replace with your actual frontend URL
        window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirectUrl}`;
    };

    return (
        <div className="login-page">
            <header className="header">
                <h1>REACHINBOX</h1>
            </header>
            <div className="login-container">
                <h2>Create a new account</h2>
                <button className="google-signup" onClick={handleOnClick}> 
                    <FontAwesomeIcon icon={faGoogle} /> Sign Up with Google
                </button>
                <button className="create-account">Create an Account</button>
                <p>Already have an account? <a href="#">Sign In</a></p>
            </div>
            <footer className="footer">
                <p>© 2023 Reachinbox. All rights reserved.</p>
            </footer>
            <div className="users">
             
            </div>
        </div>
    );
}

export default LoginPage;
