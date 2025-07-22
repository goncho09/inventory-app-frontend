import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Table from '../Table/Table';
import {
  getProducts,
  deleteProduct,
  searchProductsFiltered,
} from '@/services/useProductos';
import { getCategories } from '@/services/useCategorias';

const COLUMNS = [
  { key: 'name', label: 'Nombre' },
  { key: 'description', label: 'Descripción' },
  { key: 'price', label: 'Precio' },
  { key: 'actualStock', label: 'Stock' },
];

export default function ProductosTable() {
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setProductos(await getProducts());
  };

  const fetchCategories = async () => {
    setCategories(await getCategories());
  };

  const fetchProductsFiltered = async () => {
    setProductos(await searchProductsFiltered(search, category));
  };

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        toast.error('Producto eliminado correctamente');
        fetchProducts();
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  const handleSearch = () => fetchProductsFiltered();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-between items-center w-3/4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="border border-gray-800 rounded px-3 py-2 mr-2 w-1/4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border border-gray-800 rounded px-3 py-2 h-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Todas las categorías
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id} className="text-black">
                {cat.name}
              </option>
            ))}
          </select>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow ml-4 disabled:bg-blue-300"
            onClick={handleSearch}
            disabled={!search && !category}
          >
            Aplicar filtros
          </button>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow "
          onClick={() => navigate('/productos/nuevo')}
        >
          Nuevo Producto
        </button>
      </div>

      <Table columns={COLUMNS} data={productos} onDelete={handleDelete} />
      <ToastContainer />
    </div>
  );
}
