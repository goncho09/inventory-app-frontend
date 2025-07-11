import { useState } from 'react';
import { signUp } from '@/services/useAuth';

export default function SignUpForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    signUp(name, email, password)
      .then((response) => {
        console.log('Sign up successful:', response);
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        // Redirect to login page or handle post-signup logic
        window.location.href = '/login';
      })
      .catch((error) => {
        console.error('Sign up failed:', error);
        // Handle sign up error (e.g., show error message)
      });
  };

  return (
    <form className="bg-white p-6 rounded shadow-md w-80 space-y-3">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Ingrese su nombre"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Ingrese su email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
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
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition mt-8"
          onClick={handleSignUp}
        >
          Registrar
        </button>
      </div>
    </form>
  );
}
