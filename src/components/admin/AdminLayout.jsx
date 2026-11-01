
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { staffLogout } from "../../services/adminApi";

function AdminLayout() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    try {
      await staffLogout();
    } finally {
      navigate("/staff/login");
    }
  }

  const links = [
    { name: "Overview", path: "/staff/dashboard" },
    { name: "Quotations", path: "/staff/quotations" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 md:flex">

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-950 p-6 text-white transition-transform md:static md:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="mb-2 text-xl font-bold text-amber-400">
          Royal Tile
        </h1>

        <p className="mb-10 text-xs text-slate-400">
          Management Dashboard
        </p>

        <nav className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-amber-500 font-semibold text-slate-950"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-12 w-full rounded-lg border border-slate-700 px-4 py-3 text-left text-slate-300 hover:bg-slate-800"
        >
          Sign out
        </button>
      </aside>

      {menuOpen && (
        <button
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
        />
      )}

      <main className="min-w-0 flex-1">
        <header className="flex items-center justify-between bg-white px-5 py-5 shadow-sm">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border px-3 py-2 md:hidden"
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <h2 className="font-semibold text-slate-800">
            Business Management
          </h2>

          <span className="text-sm text-slate-500">
            Staff Portal
          </span>
        </header>

        <div className="p-5 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
