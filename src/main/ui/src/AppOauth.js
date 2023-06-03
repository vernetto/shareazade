import React from 'react';
import { GoogleOAuthProvider, GoogleLogin  } from '@react-oauth/google';

import jwtDecode from 'jwt-decode';


const clientId = '466563001954-dqtipfc6tpsd9nnio47finarbedi2v82.apps.googleusercontent.com';

const App = () => {


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h1>React Google Auth Example</h1>
        
      </div>
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log("login ok ");
    console.log(credentialResponse);
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </GoogleOAuthProvider>
  );
};

export default App;
