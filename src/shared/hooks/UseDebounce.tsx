import { useEffect, useState } from 'react';

export const useDebounce = (val: any, delay: number) => {
  const [value, setValue] = useState();

  useEffect(() => {
    const timer = setTimeout(() => setValue(val), delay);
    return () => clearTimeout(timer);
  }, [val, delay]);

  return value;
};
