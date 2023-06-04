import * as React from "react";
import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function RideTable() {
  const [loading, setLoading] = useState(true);
  const [rideList, setRideList] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [gridApi, setGridApi] = useState(null);
  const [gridApigridColumnApi, setGridColumnApi] = useState(null);

  const [quickFilterText, setQuickFilterText] = useState('');

  const [columnDefs] = useState([
    { field: 'id', sortable: true, filter: true   },
    { field: 'rideType', sortable: true , filter: true },
    { field: 'fromCity', sortable: true , filter: true },
    { field: 'toCity', sortable: true , filter: true },
    { field: 'rideDate' , sortable: true, filter: true },
    { field: 'rideTime', sortable: true , filter: true },
    { field: 'fullName', sortable: true , filter: true },
    { field: 'rideComment', sortable: true , filter: true }    
])



  useEffect(() => {
    console.log("shareList changed " + JSON.stringify(rideList));
  }, [rideList]);

  useEffect(() => {
    console.log("loading changed " + JSON.stringify(loading));
  }, [loading]);

  useEffect(() => {
    console.log('quickFilterText changed: ', quickFilterText);
  }, [quickFilterText]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }
const onFilterTextChange=(e)=>{
  gridApi.setQuickFilter(e.target.value)
  console.log(e.target.value)
}
  

  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:8080/ride/getAll", { signal: controller.signal })
      .then((res) => res.json())
      .then((result) => {
        setRideList(result);
        console.log(
          "setting " + result.length + "  elements, " + JSON.stringify(result)
        );
        console.log(result);
        const transformedData = result.map(item => ({
          id: item.id,
          rideType: item.rideType,
          fromCity: item.fromCity.cityName,
          toCity: item.toCity.cityName,
          rideDate: item.rideDate,
          rideTime: item.rideTime,
          fullName: item.user.fullName,
          rideComment: item.rideComment || 'N/A',
        }));
        setRowData(transformedData);
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
    <div className="ag-theme-alpine" style={{height: 400}}>
     <input type="search" onChange={onFilterTextChange} placeholder="Quick Filter" />

        <AgGridReact
            onGridReady={onGridReady}
            rowData={rowData}
            columnDefs={columnDefs}>
        </AgGridReact>
    </div>
);

}
