
import { Link } from "react-router-dom";

const projects = [
  {
    image: "/images/projects/floor.jpg",
    title: "Floor Tiling",
    category: "Tile Installation",
  },
  {
    image: "/images/projects/terazzo1.jpg",
    title: "Terrazzo Finish",
    category: "Terrazzo Installation",
  },
  {
    image: "/images/projects/battroom-2.webp",
    title: "Modern Interior",
    category: "Wallwork Finishing",
  },
  {
    image: "/images/projects/terazzo3.webp",
    title: "Polished Flooring",
    category: "Terrazzo Polishing",
  },
  {
    image: "/images/projects/Wall-tiling.webp",
    title: "Wall Tiling Inspection",
    category: "Tiling",
  },
  {
    image: "/images/projects/wood-tile.webp",
    title: "Floor Restoration",
    category: "Floor Repairs",
  },
  {
    image: "/images/projects/pool.webp",
    title: "Sweeming pool restoration",
    category: "Sweeming pool work",
  },
  {
    image: "/images/projects/corridor.webp",
    title: "Floor tile foundation",
    category: "Granite floor"
  },
  {
    image: "/images/projects/bathroom.webp",
    title: "Wall Tiling Finishing",
    category: "Wall Tiling Repair"
  }
];

function Projects() {
  return (
    <div>
      <section className="bg-slate-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest font-bold text-sm">
            Our Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-5">
            Our Projects
          </h1>
          <p className="text-stone-300 mt-6 max-w-2xl text-lg leading-8">
            Explore flooring and finishing work. Contact us to
            discuss your own project.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <article
              key={project.image}
              className="group overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-amber-700 uppercase tracking-widest text-xs font-bold">
                  {project.category}
                </p>
                <h2 className="text-xl font-bold text-slate-900 mt-2">
                  {project.title}
                </h2>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-slate-600 mb-6">
            Interested in having us work on your next project?
          </p>
          <Link
            to="/quote"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded font-bold"
          >
            Request a Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Projects;
