import { useRef } from "react";
import CityTable from "./CityTable";

export default function AddCity() {
    const inputRef = useRef()
  function onSubmit(e) {
    e.preventDefault()
    const city=inputRef.current.value
    fetch("/city/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({cityName: city})

  }).then(()=>{
    console.log("New Student added")
    inputRef.current.value = ""
  })
  }

  return (
    <>
      <h1>Add City</h1>;
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <CityTable />
    </>
  );
}
