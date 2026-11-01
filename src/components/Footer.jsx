
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-extrabold text-amber-400">
            ROYAL
          </h2>
          <p className="text-xs tracking-[0.2em] mt-1">
            TILE & TERRAZZO CLINIC
          </p>
          <p className="mt-5 text-sm leading-7">
            Professional tile installation, terrazzo flooring,
            polishing and floor restoration solutions.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link className="hover:text-amber-400" to="/">Home</Link>
            <Link className="hover:text-amber-400" to="/about">About Us</Link>
            <Link className="hover:text-amber-400" to="/services">Services</Link>
            <Link className="hover:text-amber-400" to="/projects">Projects</Link>
            <Link className="hover:text-amber-400" to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Our Services
          </h3>
          <div className="flex flex-col gap-3 text-sm">
            <span>Tile Installation</span>
            <span>Terrazzo Installation</span>
            <span>Terrazzo Polishing</span>
            <span>Floor Restoration</span>
            <span>Tile Supply and Sales</span>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-5">
            Contact Information
          </h3>

          <a
            href="tel:+256752804572"
            className="block text-sm hover:text-amber-400 mb-3"
          >
            +256 752 804 572
          </a>

          <a
            href="mailto:kanyamampagi@gmail.com"
            className="block text-sm hover:text-amber-400 break-all"
          >
            mpagiarthur@gmail.com
          </a>

          <a
            href="https://wa.me/256752804572"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 bg-amber-500 text-slate-950 px-5 py-3 rounded font-bold text-sm hover:bg-amber-400 transition"
          >
            WhatsApp Us
          </a>
        </div>

      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Royal Tile and Terrazzo Clinic.
          </p>
          <p>Quality Finishes. Beautiful Spaces.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
