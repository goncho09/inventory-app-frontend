import { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '@/services/useProductos';
import { getCategorias } from '@/services/useCategorias';

export default function NuevoProductoForm() {
  const navigate = useNavigate();

  const [descripcion, setDescripcion] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !descripcion || !precio || !stock || !categoria) {
      setError(true);
      return;
    }

    createProduct(nombre, descripcion, precio, stock, categoria)
      .then(() => {
        navigate('/productos');
      })
      .catch((err) => {
        console.error('Error al crear el producto:', err);
        setError(true);
      });
  };

  useState(() => {
    const fetchCategorias = async () => {
      setCategorias(await getCategorias());
    };
    fetchCategorias();
  }, []);

  return (
    <form className="w-1/4 flex flex-col items-center p-6 rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Agregar nuevo producto
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
        <label htmlFor="descripcion" className=" w-full">
          Descripción
        </label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
          required
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div className="mb-4 w-full flex flex-col items-center space-y-3 text-center">
        <label htmlFor="precio" className=" w-full">
          Precio
        </label>
        <input
          type="number"
          id="precio"
          name="precio"
          placeholder="Precio"
          required
          min={1}
          value={precio}
          onChange={(e) => setPrecio(Number(e.target.value))}
        />
      </div>
      <div className="mb-4 w-full flex flex-col items-center space-y-3 text-center">
        <label htmlFor="stock" className=" w-full">
          Stock
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          placeholder="Stock"
          min={1}
          required
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />
      </div>
      <div className="mb-4 w-full flex flex-col items-center space-y-3 text-center">
        <label htmlFor="categoria" className=" w-full">
          Categoría
        </label>
        <select
          id="categoria"
          name="categoria"
          required
          className="w-72 p-2 border border-gray-300 rounded"
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="" disabled>
            Seleccionar categoría
          </option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
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
          Agregar Producto
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
          onClick={() => navigate('/productos')}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
