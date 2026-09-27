import { useState, useEffect } from 'react';

export const useMemberCount = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://theo-api-production.up.railway.app/api/registrations/count');
        if (!response.ok) {
          throw new Error('Failed to fetch count');
        }
        const json = await response.json();
        // Look precisely for json.data.total
        if (json.success && json.data && typeof json.data.total === 'number') {
          setCount(json.data.total);
        } else {
          setCount(0);
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
        setCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return { count, loading, error };
};
