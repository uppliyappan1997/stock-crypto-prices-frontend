import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchData } from '../features/data/dataSlice';

const DataTable: React.FC = () => {
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData('BTC-USD')); // Default symbol
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.timestamp}</td>
            <td>{entry.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
