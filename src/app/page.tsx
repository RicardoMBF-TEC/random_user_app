// src/App.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { useRandomUser } from './hooks/useRandomUser';
import UserProfile from '@/app/components/userProfile';
import RefreshButton from '@/app/components/refreshButton';
import HistoryList from '@/app/components/historyList';
import { User } from './types/User';

const Page: React.FC = () => {
  const { user, loading, error, refresh } = useRandomUser();
  const [history, setHistory] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // When a new user is fetched, update the current user and history
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      setHistory(prevHistory => [user, ...prevHistory]);
    }
  }, [user]);

  const handleRefresh = () => {
    refresh();
  };

  const handleSelectHistory = (selectedUser: User) => {
    setCurrentUser(selectedUser);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* History Column */}
      <HistoryList history={history} onSelect={handleSelectHistory} />

      {/* Main Profile Section */}
      <div 
        style={{ 
          flex: 1, 
          position: 'relative', 
          padding: '2rem', 
          background: '#f5f5f5', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <RefreshButton onRefresh={handleRefresh} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {currentUser && <UserProfile user={currentUser} />}
      </div>
    </div>
  );
};

export default Page;

