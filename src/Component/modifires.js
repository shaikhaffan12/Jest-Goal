// MyFunctionalComponent.js
import React, { useState, useEffect } from 'react';

const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true; // Set to false to simulate a failure
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
};

const MyFunctionalComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <p>Data fetched successfully: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyFunctionalComponent;
