import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TextField, Button } from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';

const CustomTable = () => {
  // Sample data for the table
  const originalData = [
    { from: 'John', to: 'Jane', date: '2023-05-10' },
    { from: 'Alice', to: 'Bob', date: '2023-05-15' },
    { from: 'Eve', to: 'Frank', date: '2023-05-12' },
  ]
  const [data, setData] = useState(originalData);

  // State for sorting
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // State for filtering
  const [filterFrom, setFilterFrom] = useState('');
  const [filterTo, setFilterTo] = useState('');
  const [filterDateStart, setFilterDateStart] = useState('');
  const [filterDateEnd, setFilterDateEnd] = useState('');

  // Function to handle sorting
  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      // If already sorting by this column, reverse the direction
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If sorting by a new column, set the column and direction
      setSortColumn(columnName);
      setSortDirection('asc');
    }
    
    // Sort the data based on the selected column and direction
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[columnName];
      const bValue = b[columnName];
      
      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
    
    // Update the data with the sorted results
    setData(sortedData);
  };

  const handleFilter = () => {
    // Filter the original data based on the filter values
    const filteredData = originalData.filter((item) => {
      // Check if the From and To values match the filter values
      const matchesFrom = filterFrom === '' || item.from.toLowerCase().includes(filterFrom.toLowerCase());
      const matchesTo = filterTo === '' || item.to.toLowerCase().includes(filterTo.toLowerCase());
  
      // Check if the Date falls within the filter range
      const date = new Date(item.date);
      const startDate = filterDateStart !== '' ? new Date(filterDateStart) : null;
      const endDate = filterDateEnd !== '' ? new Date(filterDateEnd) : null;
      const matchesDate =
        (startDate === null || date >= startDate) && (endDate === null || date <= endDate);
  
      return matchesFrom && matchesTo && matchesDate;
    });
  
    // Update the data state with the filtered results
    setData(filteredData);
  };
  
  

  // Render the table
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <TextField
          label="From"
          value={filterFrom}
          onChange={(e) => setFilterFrom(e.target.value)}
          InputProps={{ endAdornment: <Search /> }}
          style={{ marginRight: '16px' }}
        />
        <TextField
          label="To"
          value={filterTo}
          onChange={(e) => setFilterTo(e.target.value)}
          InputProps={{ endAdornment: <Search /> }}
          style={{ marginRight: '16px' }}
        />
        <TextField
          label="Start Date"
          type="date"
          value={filterDateStart}
          onChange={(e) => setFilterDateStart(e.target.value)}
          InputProps={{ endAdornment: <Search /> }}
          style={{ marginRight: '16px' }}
        />
        <TextField
          label="End Date"
          type="date"
          value={filterDateEnd}
          onChange={(e) => setFilterDateEnd(e.target.value)}
          InputProps={{ endAdornment: <Search /> }}
          style={{ marginRight: '16px' }}
        />
        <Button variant="contained" color="primary" onClick={handleFilter}>
          Filter
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSort('from')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  From
                  {sortColumn === 'from' && (
                    <FilterList style={{ marginLeft: '4px' }} fontSize="small" />
                  )}
                </div>
              </TableCell>
              <TableCell onClick={() => handleSort('to')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  To
                  {sortColumn === 'to' && (
                    <FilterList style={{ marginLeft: '4px' }} fontSize="small" />
                  )}
                </div>
              </TableCell>
              <TableCell onClick={() => handleSort('date')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Date
                  {sortColumn === 'date' && (
                    <FilterList style={{ marginLeft: '4px' }} fontSize="small" />
                  )}
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.from}</TableCell>
                <TableCell>{item.to}</TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
