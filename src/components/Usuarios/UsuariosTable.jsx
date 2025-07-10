import { useEffect } from 'react';
import { useState } from 'react';
import { deleteUser, getUsers } from '@/services/useUsuarios';
import Table from '../Table/Table';

const COLUMNS = [
  { key: 'id', label: 'Código' },
  { key: 'name', label: 'Nombre' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Rol' },
];

export default function UsuariosTable() {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsers = async () => {
    setUsuarios(await getUsers());
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        fetchUsers();
      })
      .catch((error) => {
        console.error('Error al eliminar el usuario:', error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <Table columns={COLUMNS} data={usuarios} onDelete={handleDelete} />;
}
