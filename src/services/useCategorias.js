const API_URL = import.meta.env.VITE_API_URL;

export async function getCategorias() {
  const response = await fetch(`${API_URL}/categorias`);
  return response.json();
}

export async function createCategoria(nombre) {
  const response = await fetch(`${API_URL}/categorias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre }),
  });
  return response.json();
}

export async function getCategoriaById(id) {
  const response = await fetch(`${API_URL}/categorias/${id}`);
  if (!response.ok) {
    throw new Error('Error al obtener la categoría');
  }

  return response.json();
}

export async function deleteCategoria(id) {
  const response = await fetch(`${API_URL}/categorias/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}
