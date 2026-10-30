
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('images/kitchen-tile.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            Royal Tile and Terrazzo Clinic
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-tight">
            Transforming Floors Into
            <span className="text-amber-400"> Masterpieces.</span>
          </h1>

          <p className="mt-7 text-lg text-stone-300 max-w-2xl leading-relaxed">
            Professional tile installation, terrazzo installation,
            polishing and floor restoration services.
            We help transform ordinary spaces into beautiful environments.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/quote"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 font-bold rounded transition"
            >
              Request a Quote
            </Link>

            <Link
              to="/projects"
              className="border border-white hover:bg-white hover:text-slate-950 px-8 py-4 font-semibold rounded transition"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-amber-600 font-bold tracking-widest uppercase text-sm">
              Welcome to Royal
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Excellence in Every Tile and Every Finish.
            </h2>

            <p className="text-slate-600 mt-6 leading-8">
              Royal Tile and Terrazzo Clinic provides flooring
              solutions for homes, offices and commercial spaces.
              From professional tile installation to terrazzo
              polishing and restoration, our focus is on quality
              workmanship and beautiful finishes.
            </p>

            <Link
              to="/about"
              className="inline-block mt-8 text-amber-700 font-bold hover:text-amber-500"
            >
              Discover More →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
              alt="Modern interior flooring"
              className="w-full h-64 object-cover rounded-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
              alt="Elegant modern interior"
              className="w-full h-64 object-cover rounded-lg mt-10"
            />
          </div>

        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-stone-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-amber-700 font-bold uppercase tracking-widest text-sm">
              What We Do
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900">
              Our Professional Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {[
              {
                title: "Tile Installation",
                description: "Professional wall and floor tile installation.",
              },
              {
                title: "Terrazzo Installation",
                description: "Beautiful and durable terrazzo flooring solutions.",
              },
              {
                title: "Terrazzo Polishing",
                description: "Restore shine and beauty to terrazzo surfaces.",
              },
              {
                title: "Floor Restoration",
                description: "Repair damaged floors and restore their appearance.",
              },
              {
                title: "Tile Supply and Sales",
                description: "Tile supply solutions for different projects.",
              },
              {
                title: "Floor Repairs",
                description: "Reliable repairs and finishing for existing floors.",
              },
              {
                title: "Tile Groutings",
                description: "A perfect finishing and space coverings by professionals"
              }
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition border-b-4 border-transparent hover:border-amber-500"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 text-xl font-bold">
                  ✓
                </div>

                <h3 className="text-xl font-bold mt-6 text-slate-900">
                  {service.title}
                </h3>

                <p className="text-slate-600 mt-3 leading-7">
                  {service.description}
                </p>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-slate-950 text-white px-8 py-4 rounded hover:bg-amber-500 hover:text-slate-950 transition font-bold"
            >
              Explore All Services
            </Link>
          </div>

        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Planning Your Next Flooring Project?
          </h2>

          <p className="text-stone-300 mt-6 text-lg">
            Get in touch with Royal Tile and Terrazzo Clinic
            to discuss your project and request a quotation.
          </p>

          <Link
            to="/quote"
            className="inline-block mt-9 bg-amber-500 text-slate-950 px-9 py-4 rounded font-bold hover:bg-amber-400 transition"
          >
            Request Your Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
