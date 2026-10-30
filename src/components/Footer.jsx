import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-stone-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-amber-400">
            ROYAL
          </h2>
          <p className="mt-3 text-sm">
            Royal Tile and Terrazzo Clinic
          </p>
          <p className="mt-2 text-sm">
            Quality flooring, installation and restoration services.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Contact Us</h3>
          <p className="text-sm">Phone: 0752804572</p>
          <p className="text-sm mt-2">
            Email: kanyamampagi@gmail.com
          </p>
          <a
            href="https://wa.me/256752804572"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-amber-400 hover:text-amber-300"
          >
            Chat with us on WhatsApp
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-700 mt-8 pt-5 text-center text-xs">
        © {new Date().getFullYear()} Royal Tile and Terrazzo Clinic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;