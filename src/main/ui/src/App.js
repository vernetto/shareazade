import './App.css';
import RideTable from './RideTable'

import React from "react";
import {Link, Routes,  Route} from "react-router-dom";
import SweetHome from './SweetHome';
import AddUser from './AddUser';

function App() {
  return (
    <>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
  
  <Routes>
       <Route path="/" element={<RideTable/>}></Route>
       <Route path="/adduser" element={<AddUser/>}></Route>
  </Routes>
  </>
  )
}

export default App;
