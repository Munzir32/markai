import { useState } from 'react';

export function useOpenAiHook<T>() {
    
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<T | null>(null);

  const generateResult = async (prompt: any) => {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch(
            '/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt })
            }
        )

        if (!response.ok) {
            throw new Error('Failed to generate result to search');
          }
    
          const data = await response.json();
          console.log(data)
          setResult(data.result);
    
    } catch (error) {
        console.error(error)
        setLoading(false)
    }
  }

  return { result, loading, error, generateResult }

}