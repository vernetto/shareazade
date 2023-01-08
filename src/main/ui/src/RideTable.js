import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

export default function RideTable() {
  const [loading, setLoading] = useState(true);
  const [rideList, setRideList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("shareList changed " + JSON.stringify(rideList));
  }, [rideList]);

  useEffect(() => {
    console.log("loading changed " + JSON.stringify(loading));
  }, [loading]);

  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:8080/share/getAll", { signal: controller.signal })
      .then((res) => res.json())
      .then((result) => {
        setRideList(result);
        console.log(
          "setting " + result.length + "  elements, " + JSON.stringify(result)
        );
        console.log(result);
      })
      .catch((error) => {
        setErrorMessage("error fetching shares");
        console.log(error);
        setLoading(false);
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Id</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rideList.map((ride) => (
            <TableRow
              key={ride.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right"><Link to={`/ride/${ride.id}`}>{ride.id}</Link></TableCell>
              <TableCell component="th" scope="row">
                {ride.rideType}
              </TableCell>
              <TableCell align="right">{ride.fromCity.cityName}</TableCell>
              <TableCell align="right">{ride.toCity.cityName}</TableCell>
              <TableCell align="right">{ride.rideDate}</TableCell>
              <TableCell align="right">{ride.rideTime}</TableCell>
              <TableCell align="right"><Link to={`/user/${ride.user.id}`}>{ride.user.fullName}</Link></TableCell>
              <TableCell align="right">{ride.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
