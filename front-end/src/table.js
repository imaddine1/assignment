
import React, { useState, useEffect } from 'react';

const Table = () => {
  const [data, setData] = useState([]);

  let intervalId;
  useEffect(() => {
    fetchData();
     intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  // function responsible for fetching data
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3002/fetch-data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      clearInterval(intervalId);
    }
  };

  return (
    <div>
        <h1>Books Data</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Country</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.author}</td>
                <td>{item.title}</td>
                <td>{item.country}</td>
                <td>{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
