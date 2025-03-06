// src/components/HistoryList.tsx

import React from 'react';
import { User } from '../types/User';

interface HistoryListProps {
  history: User[];
  onSelect: (user: User) => void;
}

const HistoryList: React.FC<HistoryListProps> = ({ history, onSelect }) => {
  return (
    <div style={{ width: '200px', borderRight: '1px solid #ccc', padding: '1rem' }}>
      <h3>History</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {history.map((user, index) => (
          <li 
            key={index} 
            onClick={() => onSelect(user)} 
            style={{ cursor: 'pointer', margin: '0.5rem 0' }}
          >
            {`${user.name.first} ${user.name.last}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
