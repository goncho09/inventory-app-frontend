import { useEffect } from 'react';
import { use, useState } from 'react';
import { getProducts, deleteProduct } from '@/services/useProductos';
import Table from '../Table/Table';

const COLUMNS = [
  { key: 'id', label: 'Código' },
  { key: 'name', label: 'Nombre' },
  { key: 'description', label: 'Descripción' },
  { key: 'price', label: 'Precio' },
  { key: 'actualStock', label: 'Stock' },
];

export default function ProductosTable() {
  const [productos, setProductos] = useState([]);

  const fetchProducts = async () => {
    setProductos(await getProducts());
  };

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        fetchProducts();
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <Table columns={COLUMNS} data={productos} onDelete={handleDelete} />;
}
