import HomePage from './pages/Home.jsx';
import ProductosPage from './pages/Productos.jsx';
import Layout from './components/Layout/Layout.jsx';
import { Routes, Route } from 'react-router-dom';
import UsuariosPage from './pages/Usuarios.jsx';
import NotFoundPage from './pages/404.jsx';
import NuevoProductoPage from './pages/NuevoProducto.jsx';
import NuevoUsuarioPage from './pages/NuevoUsuario.jsx';
import EditarProductoPage from './pages/EditarProducto.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="productos" element={<ProductosPage />} />
        <Route path="productos/nuevo" element={<NuevoProductoPage />} />
        <Route path="productos/:id/editar" element={<EditarProductoPage />} />
        <Route path="usuarios" element={<UsuariosPage />} />
        <Route path="usuarios/nuevo" element={<NuevoUsuarioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
