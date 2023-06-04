import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddRide = () => {
  const [ride, setRide] = useState({
    id: '',
    rideType: '',
    fromCity: '',
    toCity: '',
    rideDate: new Date(),
    rideTime: '',
    fullName: '',
    rideComment: '',
  });

  const cities = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston']; // Define your cities here.

  const handleChange = (event) => {
    setRide({ ...ride, [event.target.name]: event.target.value });
  };

  const handleDateChange = date => {
    setRide({ ...ride, rideDate: date });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://api.example.com/rides', ride) // Replace with your API endpoint.
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ride Type:
        <select name="rideType" value={ride.rideType} onChange={handleChange}>
          <option value="REQUEST">REQUEST</option>
          <option value="OFFER">OFFER</option>
        </select>
      </label>

      <label>
        From City:
        <select name="fromCity" value={ride.fromCity} onChange={handleChange}>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
      </label>

      <label>
        To City:
        <select name="toCity" value={ride.toCity} onChange={handleChange}>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
      </label>

      <label>
        Ride Date:
        <DatePicker selected={ride.rideDate} onChange={handleDateChange} />
      </label>

      <label>
        Ride Time:
        <input type="time" name="rideTime" value={ride.rideTime} onChange={handleChange} />
      </label>

      <label>
        Full Name:
        <input type="text" name="fullName" value={ride.fullName} onChange={handleChange} />
      </label>

      <label>
        Ride Comment:
        <textarea name="rideComment" value={ride.rideComment} onChange={handleChange} />
      </label>

      <button type="submit">Submit Ride</button>
    </form>
  );
};

export default AddRide;
