// src/hooks/useRandomUser.ts
'use client'
import { useState, useEffect, useCallback } from 'react';
import { User } from '../types/User';

export const useRandomUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setUser(data.results[0]);
      } else {
        setError('No user found');
      }
    } catch (err) {
      setError('Failed to fetch user');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomUser();
  }, [fetchRandomUser]);

  return { user, loading, error, refresh: fetchRandomUser };
};
