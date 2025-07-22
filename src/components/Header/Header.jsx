import { logOut } from '@/services/useAuth';
import NavItem from './NavItem';
import { useAuth } from '@/context/authContext.jsx';

export default function Header() {
  const { user, loading, setUser } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtiene la información del usuario
  }

  const handleLogout = async () => {
    await logOut();
    setUser(null);
    window.location.href = '/login'; // Redirigir al usuario a la página de inicio de sesión
  };

  return (
    <header className="flex w-full h-20 bg-[#1E40AF] justify-between items-center py-2 px-6 text-white">
      <a href="/" className=" text-lg font-semibold">
        <h2>CLOTHES STORE</h2>
      </a>
      <nav className="flex">
        <ul className="flex gap-4">
          <NavItem href="/usuarios" text="Usuarios" />
          <NavItem href="/productos" text="Productos" />
          {user ? (
            <button onClick={handleLogout}>Cerrar sesión</button>
          ) : (
            <NavItem href="/login" text="Iniciar sesión" />
          )}
        </ul>
      </nav>
    </header>
  );
}
