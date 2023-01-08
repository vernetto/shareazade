import { useParams } from "react-router-dom";

export default function Ride() {
  const {id} = useParams()
  return <h1>Ride {id}</h1>;
}
