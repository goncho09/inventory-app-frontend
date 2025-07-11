import { useState } from 'react';
import { logIn } from '@/services/useAuth';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((data) => {
        console.log('Login successful:', data);
        // Handle successful login (e.g., redirect, show message)
      })
      .catch((error) => {
        console.error('Login failed:', error);
        // Handle login error (e.g., show error message)
      });
  };

  return (
    <form className="bg-white p-6 rounded shadow-md w-80 space-y-3">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Ingrese su email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Ingrese su contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition mt-6"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>
      </div>
      <p className="text-center text-sm text-gray-600 mt-4">
        ¿No tienes una cuenta?
        <a href="/signup" className="text-blue-500 hover:text-blue-600">
          Crea una
        </a>
      </p>
    </form>
  );
}
