import SignUpForm from '../components/Form/SignUp';

export default function SignUpPage() {
  return (
    <section className="flex flex-col items-center justify-center  mt-32">
      <h1 className="text-2xl font-bold mb-4">Registrarse</h1>
      <SignUpForm />
    </section>
  );
}
