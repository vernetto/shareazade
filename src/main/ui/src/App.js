import "./App.css";
import RideTable from "./RideTable";

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AddUser from "./AddUser";
import AddCity from "./AddCity";
import AddRide from "./AddRide";
import Ride from "./Ride";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addride">Add Ride</Link>
          </li>
          <li>
            <Link to="/adduser">Add User</Link>
          </li>
          <li>
            <Link to="/addcity">Add City</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<RideTable />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
        <Route path="/addcity" element={<AddCity />}></Route>
        <Route path="/addride" element={<AddRide />}></Route>
        <Route path="/ride/:id" element={<Ride />}></Route>
      </Routes>
    </>
  );
}

export default App;
