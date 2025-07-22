export default function Unauthorized() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-gray-900 -mt-16">
      <h1 className="text-4xl font-bold">401 - No autorizado</h1>
      <p className="mt-4 text-lg">
        No tienes permiso para acceder a esta página.
      </p>
    </div>
  );
}
