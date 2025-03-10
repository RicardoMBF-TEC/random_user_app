import { useState, useEffect } from "react";
import { User } from "../types/User";

export const useRandomUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setUser(data.results[0]); // Extract first user from results array
      } else {
        setError("No user data found");
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setError("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, error, refresh: fetchUser };
};


