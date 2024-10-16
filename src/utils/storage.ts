// Função para salvar dados no localStorage
export const saveToStorage = (key: string, data: any): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Função para recuperar dados do localStorage
export const getFromStorage = (key: string): any | null => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
};

// Função para remover dados do localStorage
export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};
