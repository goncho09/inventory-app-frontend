import { getInfo } from '@/services/useInfo';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [info, setInfo] = useState({
    cantidadUsuarios: 0,
    cantidadProductos: 0,
    cantidadPocosProductos: 0,
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getInfo();
      console.log(data);
      setInfo({
        cantidadUsuarios: data.cantidadUsuarios.count || 0,
        cantidadProductos: data.cantidadProductos.count || 0,
        cantidadPocosProductos: data.productosPocos.count || 0,
      });
    };
    getData();
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Cantidad de Usuarios</h2>
          <p>{info.cantidadUsuarios}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Cantidad de Productos</h2>
          <p>{info.cantidadProductos}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">
            Productos con stock menor a 5
          </h2>
          <p>{info.cantidadPocosProductos}</p>
        </div>
      </div>
    </section>
  );
}
