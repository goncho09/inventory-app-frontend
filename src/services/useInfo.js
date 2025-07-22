const API_URL = import.meta.env.VITE_API_URL;

export const getInfo = async () => {
  try {
    const res = await fetch(`${API_URL}/info`, {
      method: 'GET',
      credentials: 'include',
    });
    if (!res.ok) {
      console.warn('Error al obtener información:', res.status);
      return null;
    }
    return await res.json();
  } catch (error) {
    console.warn('Error de red al obtener información:', error);
    return null;
  }
};
