import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '@/services/useUsuarios';

export default function NuevoUsuarioForm() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !password || !role) {
      setError(true);
      return;
    }

    createUser(nombre, email, password, role)
      .then(() => {
        navigate('/usuarios');
      })
      .catch((err) => {
        console.error('Error al crear el usuario:', err);
        setError(true);
      });
  };

  return (
    <form className="w-1/4 flex flex-col items-center p-6 rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Agregar nuevo usuario
      </h2>
      <div className="mb-4 w-full flex flex-col items-center space-y-3 text-center">
        <label htmlFor="nombre" className=" w-full ">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-4 w-full flex flex-col items-center space-y-3 text-center">
        <label htmlFor="email" className=" w-full">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4 w-full flex flex-col items-center space-y-3 text-center">
        <label htmlFor="password" className=" w-full">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4 w-full flex flex-col items-center space-y-3 text-center">
        <label htmlFor="role" className=" w-full">
          Role
        </label>
        <select>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      {error && (
        <div className="text-red-500 text-center mb-2">
          Por favor, completa todos los campos.
        </div>
      )}
      <div className="flex w-3/4 justify-center space-x-3 mt-4">
        <button
          type="submit"
          className="w-64 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          onClick={handleSubmit}
        >
          Agregar Usuario
        </button>
        <button
          type="reset"
          className="w-64 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
        >
          Limpiar
        </button>
        <button
          type="button"
          className="w-64 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
          onClick={() => navigate('/usuarios')}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
