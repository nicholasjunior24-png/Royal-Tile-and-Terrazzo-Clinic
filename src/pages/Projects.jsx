
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Modern Floor Tile Installation",
    category: "Tile Installation",
    description: "A clean and modern tiled floor finish for a residential space.",
    image:
      "/images/projects/bathroom.webp",
  },
  {
    id: 2,
    title: "Premium Terrazzo Flooring",
    category: "Terrazzo",
    description: "A smooth terrazzo floor finish designed for durability and style.",
    image:
      "/images/projects/terazzo1.jpg",
  },
  {
    id: 3,
    title: "Polished Interior Flooring",
    category: "Polishing",
    description: "A polished floor surface with a clean and refined appearance.",
    image:
      "/images/projects/terazzo3.webp",
  },
  {
    id: 4,
    title: "Contemporary Wall Tiling",
    category: "Tile Installation",
    description: "Modern wall tile styling for an elegant interior.",
    image:
      "/images/projects/battroom-2.webp",
  },
  {
    id: 5,
    title: "Floor Restoration",
    category: "Restoration",
    description: "An example of a refreshed floor surface and improved finish.",
    image:
      "/images/projects/floor.jpg",
  },
  {
    id: 6,
    title: "Elegant Terrazzo Interior",
    category: "Terrazzo",
    description: "A terrazzo-inspired finish for a modern interior.",
    image:
      "/images/projects/wood-tile.webp",
  },
  {
    id: 7,
    title: "Fresh Wall Tile Installation",
    category: "Wall Tilings",
    description: "Wall Tile Inspections at site",
    image: "/images/projects/Wall-tiling.webp"
  },
  {
    id: 8,
    title: "Fresh Path Way Finish",
    category: "Floor corridor",
    description: "Finished granite corridor finish",
    image: "/images/projects/corridor.webp"
  },
  {
    id: 9,
    title: "Pool Project",
    category: "Complete Sweeming pool work",
    description: "complete fine pool tiling",
    image: "/images/projects/sweeming pool.webp"
  },
  {
    id: 10,
    title: "Granite Grave work",
    category: "Complete Granite grave finish",
    description: "Completed granite grave finishings",
    image: "/images/projects/grave1.webp"
  },
  {
    id: 11,
    title: "Terrazzo Grave",
    category: "Terrazzo grave polishing",
    description: "Completing polish finishing of grave",
    image: "/images/projects/terrazo_grave_1.jpg"
  },
  {
    id: 12,
    title: "Wall pool tile",
    category: "Floor and Wall tiling",
    description: "pool tile work in progress",
    image: "/images/projects/wall-pool.webp"
  }
];

const categories = [
  "All",
  "Tile Installation",
  "Terrazzo",
  "Polishing",
  "Restoration",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="min-h-screen bg-stone-50">
      {/* Page heading */}
      <div className="bg-slate-900 px-6 py-20 text-center text-white">
        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-amber-400">
          Our Portfolio
        </p>

        <h1 className="mb-5 text-4xl font-bold md:text-5xl">
          Our Projects
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Explore examples of tile installation, terrazzo finishes,
          floor polishing, and restoration work.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-amber-500 text-slate-950"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-amber-500 hover:text-amber-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project gallery */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="block w-full text-left"
                aria-label={`View ${project.title}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                    <span className="rounded-full bg-white px-5 py-2 font-semibold text-slate-900 opacity-0 transition group-hover:opacity-100">
                      View Project
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold text-amber-600">
                    {project.category}
                  </p>

                  <h2 className="mb-3 text-xl font-bold text-slate-900">
                    {project.title}
                  </h2>

                  <p className="text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-slate-600">
            No projects found in this category.
          </p>
        )}
      </div>

      {/* Image lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-4 py-2 text-xl text-white hover:bg-black"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-h-[70vh] w-full object-cover"
            />

            <div className="p-6">
              <p className="mb-2 font-semibold text-amber-600">
                {selectedProject.category}
              </p>

              <h2 className="mb-2 text-2xl font-bold text-slate-900">
                {selectedProject.title}
              </h2>

              <p className="text-slate-600">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

