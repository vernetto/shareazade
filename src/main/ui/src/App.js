import "./App.css";
import RideTable from "./RideTable";

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AddUser from "./AddUser";
import AddCity from "./AddCity";
import AddRide from "./AddRide";
import Ride from "./Ride";
import User from "./User";
import CustomTable from "./CustomTable";
import NotFound from "./NotFound";
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '466563001954-dqtipfc6tpsd9nnio47finarbedi2v82.apps.googleusercontent.com';



function App() {
  const { signIn } = useGoogleLogin({
    clientId,
    onLoginSuccess: (response) => {
      console.log('Logged in successfully:', response);
    },
    onLoginFailure: (error) => {
      console.log('Login failed:', error);
    },
    autoLoad: false,
  });

  return (
    <GoogleOAuthProvider clientId={clientId}>
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ride/add">Add Ride</Link>
          </li>
          <li>
            <Link to="/user/add">Add User</Link>
          </li>
          <li>
            <Link to="/city/add">Add City</Link>
          </li>
        </ul>
      </nav>
      
      <button onClick={signIn}>Sign In with Google</button>

      <Routes>
        <Route path="/" element={<RideTable />}></Route>
        <Route path="/user">
          <Route path="add" element={<AddUser />}></Route>
          <Route path=":id" element={<User />}></Route>
        </Route>
        <Route path="/city">
          <Route path="add" element={<AddCity />}></Route>
        </Route>
        <Route path='/ride'>
          <Route path="add" element={<AddRide />}></Route>
          <Route path=":id" element={<Ride />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <CustomTable/>
    </>
    </GoogleOAuthProvider>
  );
}

export default App;
