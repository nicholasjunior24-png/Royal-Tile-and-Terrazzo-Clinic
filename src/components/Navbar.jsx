import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contacts" },
];

function Navbar() {
  return (
    <nav className="bg-slate-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">

        <Link to="/" className="leading-tight">
          <span className="block text-2xl font-bold text-amber-400">
            ROYAL
          </span>
          <span className="text-xs tracking-widest text-stone-300">
            TILE & TERRAZZO CLINIC
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-5">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-amber-400 ${
                  isActive ? "text-amber-400" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/quote"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-3 rounded font-bold"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
