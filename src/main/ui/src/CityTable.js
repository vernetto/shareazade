import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityTable = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('/city/getAll')
            .then(res => {
                setCities(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>City Name</th>
                </tr>
            </thead>
            <tbody>
                {cities.map(city => (
                    <tr key={city.id}>
                        <td>{city.id}</td>
                        <td>{city.cityName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CityTable;
