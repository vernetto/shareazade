import { useState, useEffect } from "react"

export default function CityTable() {
    //const [cities, setCities] = useState([])
    let cities = []

    const fetchData = () => {
        fetch("http://localhost:8080/city/getAll")
        .then(response => {
            return response.json();
        })
        .then(data => {
            cities = data;
            console.log(JSON.stringify(cities))
        });
    }

    console.log("fetching data")
    fetchData()
    console.log("done fetching data")
    console.log("after " + JSON.stringify(cities))
    
    return (
    <>
        <h1>Cities here</h1>
        <ul>
            {cities.map((city) => (
                <li key={city.id}>{city.cityName}</li>)
            )}
        </ul>
    </>
    )
}