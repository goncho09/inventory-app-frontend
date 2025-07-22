const API_URL = import.meta.env.VITE_API_URL;

// Login
export const logIn = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // No tirar error, simplemente retornar null o info útil
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn('Error de red al intentar iniciar sesión:', error);
    return null;
  }
};

// Signup
export const signUp = async (name, email, password, role = 'user') => {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role }),
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn('Error de red al intentar registrarse:', error);
    return null;
  }
};

export const getUserInfo = async () => {
  try {
    const res = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!res.ok) {
      // Evita que el 401 genere error visible
      if (res.status !== 401) {
        console.warn('Respuesta inesperada en getInfo:', res.status);
      }
      return null;
    }

    return await res.json();
  } catch (error) {
    console.warn('Error de red en getInfo:', error);
    return null;
  }
};

// Logout
export const logOut = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    console.warn('Error al cerrar sesión:', error);
    return false;
  }
};
