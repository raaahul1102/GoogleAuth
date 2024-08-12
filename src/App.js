import React from 'react';
import LoginPage from './LoginPage';
//import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { NextPage } from './NextPage';
import GoogleLoginRedirect from './GoogleLoginRedirection';

function App() {
    
    return (
        // <div className="App">
        //     <LoginPage />

        // </div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <LoginPage />}></Route>
            <Route path="/google-login-redirect" element={<GoogleLoginRedirect/>} />
            <Route path='/verify' element={<NextPage/>}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
