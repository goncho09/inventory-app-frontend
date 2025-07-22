import ProductosTable from '@/components/Productos/ProductosTable';
import { useAuth } from '@/context/AuthContext';
import Unauthorized from '@/components/Unauthorized/Unauthorized';

export default function ProductosPage() {
  const { user } = useAuth();
  if (!user) return <Unauthorized />;
  return (
    <div className="flex items-center flex-col justify-center mt-16">
      <ProductosTable />
    </div>
  );
}
