import { useLocation, useNavigate } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md';

export default function TableItem({ columns, data, onDelete }) {
  const location = useLocation();
  let ruta = location.pathname.split('/')[1]; // Obtener la ruta actual
  const navigate = useNavigate();
  return (
    <tr
      className="hover:bg-gray-100 text-center cursor-pointer"
      onClick={() => navigate(`${data.id}/editar`)}
    >
      {columns.map((column, index) => (
        <td key={index} className="p-2">
          {column.key === 'price'
            ? `$ ${data[column.key]}` // Formatear el precio a dos decimales
            : data[column.key]}
        </td>
      ))}
      <td className="p-2">
        <button
          className="text-green-400 hover:text-green-600 "
          onClick={() => navigate(`/${ruta}/${data.id}/editar`)}
        >
          <MdEdit className="inline-block text-3xl" />
        </button>
        <button
          className="text-red-600 hover:text-red-800 ml-2 "
          onClick={() => onDelete(data.id)}
        >
          <MdDelete className="inline-block text-3xl" />
        </button>
      </td>
    </tr>
  );
}
