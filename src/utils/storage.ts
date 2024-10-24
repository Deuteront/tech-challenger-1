export const saveToStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromStorage = <T>(key: string): T | null => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error(`Error parsing data for key "${key}":`, error);
      return null;
    }
  }
  return null;
};

export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};