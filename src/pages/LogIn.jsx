import LogInForm from '../components/Form/Login';

export default function LogInPage() {
  return (
    <section className="flex flex-col items-center justify-center  mt-32">
      <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
      <LogInForm />
    </section>
  );
}
