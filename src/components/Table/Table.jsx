import TableItem from './TableItem';

export default function Table({ columns, data, onDelete }) {
  return (
    <table className="bg-white shadow-md rounded-lg w-3/4 overflow-hidden text-gray-800 border border-gray-300">
      <thead className="bg-blue-800 text-white ">
        <tr className="">
          {columns.map((column, index) => (
            <th key={index} className="col-span-1 p-2">
              {column.label}
            </th>
          ))}
          <th className="col-span-1 p-2">Acciones</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 text-gray-800">
        {data.map((item, index) => (
          <TableItem
            key={index}
            columns={columns}
            data={item}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
