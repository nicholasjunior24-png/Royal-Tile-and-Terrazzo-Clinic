
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block py-3 md:py-0 font-medium transition-colors duration-200 ${
      isActive
        ? "text-amber-400"
        : "text-white hover:text-amber-400"
    }`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="min-h-20 flex items-center justify-between gap-4">

          {/* Business Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex flex-col leading-tight shrink-0"
          >
            <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-amber-400">
              ROYAL
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-stone-300">
              TILE & TERRAZZO CLINIC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkStyle}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Quote Button */}
          <Link
            to="/quote"
            className="hidden lg:inline-flex bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-md font-bold transition"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden p-2 rounded-md border border-slate-700 hover:bg-slate-800 transition"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden border-t border-slate-800 py-4"
          >
            <div className="flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={linkStyle}
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/quote"
                onClick={closeMenu}
                className="mt-3 text-center bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-md font-bold transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

