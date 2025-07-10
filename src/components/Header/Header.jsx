import NavItem from './NavItem';

export default function Header() {
  return (
    <header className="flex w-full h-20 bg-[#1E40AF] justify-between items-center py-2 px-6 text-white">
      <a href="/" className=" text-lg font-semibold">
        <h2>CLOTHES STORE</h2>
      </a>
      <nav className="flex">
        <ul className="flex gap-4">
          <NavItem href="/usuarios" text="Usuarios" />
          <NavItem href="/productos" text="Productos" />
        </ul>
      </nav>
    </header>
  );
}
