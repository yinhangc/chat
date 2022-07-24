import { useEffect, useState } from 'react';

const PREFIX = 'chat-demo-';

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue) return JSON.parse(jsonValue);
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [value, prefixedKey]);

  return [value, setValue];
};

export default useLocalStorage;
