import React, { useState } from 'react';

const Table = () => {
  // Sample data for the table
  const [data, setData] = useState([
    { from: 'John', to: 'Jane', date: '2023-05-10' },
    { from: 'Alice', to: 'Bob', date: '2023-05-15' },
    { from: 'Eve', to: 'Frank', date: '2023-05-12' },
  ]);

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
  };

  // Function to handle filtering
  const handleFilter = () => {
    // Filter the data based on the filter values
    const filteredData = data.filter((item) => {
      // Check if the From and To values match the filter values
      const matchesFrom = item.from.toLowerCase().includes(filterFrom.toLowerCase());
      const matchesTo = item.to.toLowerCase().includes(filterTo.toLowerCase());

      // Check if the Date falls within the filter range
      const date = new Date(item.date);
      const startDate = new Date(filterDateStart);
      const endDate = new Date(filterDateEnd);
      const matchesDate = date >= startDate && date <= endDate;

      return matchesFrom && matchesTo && matchesDate;
    });

    // Update the data with the filtered results
    setData(filteredData);
  };

  // Render the table
  return (
    <div>
      <div>
        <label>
          From:
          <input type="text" value={filterFrom} onChange={(e) => setFilterFrom(e.target.value)} />
        </label>
        <label>
          To:
          <input type="text" value={filterTo} onChange={(e) => setFilterTo(e.target.value)} />
        </label>
        <label>
          Start Date:
          <input type="date" value={filterDateStart} onChange={(e) => setFilterDateStart(e.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={filterDateEnd} onChange={(e) => setFilterDateEnd(e.target.value)} />
        </label>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('from')}>From</th>
            <th onClick={() => handleSort('to')}>To</th>
            <th onClick={() => handleSort('date')}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
