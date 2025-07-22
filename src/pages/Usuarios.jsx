import { useNavigate } from 'react-router-dom';
import UsuariosTable from '../components/Usuarios/UsuariosTable';
import { useAuth } from '@/context/AuthContext';
import Unauthorized from '@/components/Unauthorized/Unauthorized';

export default function UsuariosPage() {
  const { user } = useAuth();
  if (!user) return <Unauthorized />;
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col justify-center mt-16">
      <div className="flex justify-end w-3/4 mb-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          onClick={() => navigate('/usuarios/nuevo')}
        >
          Nuevo Usuario
        </button>
      </div>
      <UsuariosTable />
    </div>
  );
}
