import { useRef } from "react";
import CityTable from "./CityTable";

export default function AddCity() {
    const inputRef = useRef()
  function onSubmit(e) {
    alert(inputRef.current.value)
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
