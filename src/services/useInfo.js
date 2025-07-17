const API_URL = import.meta.env.VITE_API_URL;

export async function getInfo() {
  try {
    const response = await fetch(`${API_URL}/info`);
    return response.json();
  } catch (error) {
    console.error('Error fetching info:', error);
    throw error;
  }
}
