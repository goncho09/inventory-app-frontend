const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/usuarios`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/usuarios/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export const createUser = async (nombre, email, password, role) => {
  try {
    const response = await fetch(`${API_URL}/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, email, password, role }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
