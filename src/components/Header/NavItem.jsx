export default function NavItem({ href, text }) {
  return (
    <li>
      <a href={href} className="hover:text-[#F97316]">
        {text}
      </a>
    </li>
  );
}
