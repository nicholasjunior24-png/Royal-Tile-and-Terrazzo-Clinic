
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Tile Installation",
    description:
      "Wall and floor tile installation for residential and commercial spaces, with attention to alignment and finishing.",
  },
  {
    number: "02",
    title: "Terrazzo Installation",
    description:
      "Terrazzo flooring solutions for customers looking for durable and attractive floor finishes.",
  },
  {
    number: "03",
    title: "Terrazzo Polishing",
    description:
      "Polishing services to improve the appearance and shine of terrazzo surfaces.",
  },
  {
    number: "04",
    title: "Floor Repairs and Restoration",
    description:
      "Repair and restoration work to improve worn, damaged or ageing floor surfaces.",
  },
  {
    number: "05",
    title: "Tile Supply and Sales",
    description:
      "Tile supply options for customers planning new installations or renovation projects.",
  },
  {
    number: "06",
    title: "Wall and Floor Tiling",
    description:
      "Tiling solutions for different areas, including rooms, bathrooms and other interior spaces.",
  },
];

function Services() {
  return (
    <div>
      <section className="bg-slate-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest font-bold text-sm">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-5">
            Our Services
          </h1>
          <p className="text-stone-300 mt-6 max-w-2xl text-lg leading-8">
            Explore our tile, terrazzo and floor finishing services.
            Get in touch to discuss what your project requires.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <article
              key={service.number}
              className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <span className="text-amber-600 text-3xl font-bold">
                {service.number}
              </span>

              <h2 className="text-xl font-bold text-slate-900 mt-5">
                {service.title}
              </h2>

              <p className="text-slate-600 mt-4 leading-7">
                {service.description}
              </p>

              <Link
                to="/quote"
                className="inline-block mt-6 font-bold text-amber-700 hover:text-amber-500"
              >
                Request this service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-amber-500 px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-950">
              Have a flooring project in mind?
            </h2>
            <p className="mt-3 text-slate-800">
              Tell us what you need and request a quotation.
            </p>
          </div>

          <Link
            to="/quote"
            className="bg-slate-950 text-white px-8 py-4 rounded font-bold hover:bg-slate-800"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
