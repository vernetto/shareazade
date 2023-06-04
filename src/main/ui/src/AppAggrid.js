import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AppAggrid = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridApigridColumnApi, setGridColumnApi] = useState(null);

   const [rowData] = useState([
       {make: "Toyota", model: "Celica", price: 35000},
       {make: "Ford", model: "Mondeo", price: 32000},
       {make: "Porsche", model: "Boxster", price: 72000}
   ]);

   const [columnDefs] = useState([
       { field: 'make', sortable: true, filter: true   },
       { field: 'model' , sortable: true, filter: true },
       { field: 'price', sortable: true , filter: true }
   ])
   const [quickFilterText, setQuickFilterText] = useState('');

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
  

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <input type="search" onChange={onFilterTextChange} placeholder="Quick Filter" />

           <AgGridReact
               onGridReady={onGridReady}
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   );
};

export default AppAggrid;