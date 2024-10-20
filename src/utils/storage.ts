export const saveToStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromStorage = <T>(key: string): T | null => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
};

export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};
