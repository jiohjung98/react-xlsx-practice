import React from 'react';
import { DataItem} from '../types/DataItem';

const TableComponent = ({ data }: { data: DataItem[] }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>; 
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
