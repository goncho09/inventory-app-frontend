const API_URL = import.meta.env.VITE_API_URL;

export async function getCategories() {
  const response = await fetch(`${API_URL}/categorias`, {
    method: 'GET',
    credentials: 'include',
  });
  return response.json();
}

export async function createCategoria(nombre) {
  const response = await fetch(`${API_URL}/categorias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre }),
    credentials: 'include',
  });
  return response.json();
}

export async function getCategoriaById(id) {
  const response = await fetch(`${API_URL}/categorias/${id}`, {
    method: 'GET',
    credentials: 'include', // Include cookies for authentication
  });
  if (!response.ok) {
    throw new Error('Error al obtener la categoría');
  }

  return response.json();
}

export async function deleteCategoria(id) {
  const response = await fetch(`${API_URL}/categorias/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return response.json();
}
