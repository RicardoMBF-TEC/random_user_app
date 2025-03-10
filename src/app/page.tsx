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

  // Update currentUser and prevent duplicate history entries
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      setHistory(prevHistory => {
        const isDuplicate = prevHistory.some(u => u.email === user.email);
        return isDuplicate ? prevHistory : [user, ...prevHistory];
      });
    }
  }, [user]);

  return (
    <div className="flex h-screen">
      {/* History Column */}
      <HistoryList history={history} onSelect={setCurrentUser} />

      {/* Main Profile Section */}
      <div className="flex-1 relative p-8 bg-gray-100 flex justify-center items-center">
        <RefreshButton onRefresh={refresh} />
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {currentUser && <UserProfile user={currentUser} />}
      </div>
    </div>
  );
};

export default Page;


