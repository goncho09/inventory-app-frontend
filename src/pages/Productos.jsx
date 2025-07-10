import ProductosTable from '../components/Productos/ProductosTable';
import { useNavigate } from 'react-router-dom';

export default function ProductosPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-col justify-center mt-16">
      <div className="flex justify-end w-3/4 mb-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          onClick={() => navigate('/productos/nuevo')}
        >
          Nuevo Producto
        </button>
      </div>
      <ProductosTable />
    </div>
  );
}
