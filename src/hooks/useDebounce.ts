import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number = 300) {
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (value !== debouncedValue) {
      setIsLoading(true);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, debouncedValue]);

  return { debouncedValue, isLoading };
}
