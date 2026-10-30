
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <section className="bg-slate-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest font-bold text-sm">
            Get to Know Us
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-5">
            About Royal Tile and Terrazzo Clinic
          </h1>
          <p className="text-stone-300 mt-6 max-w-2xl text-lg leading-8">
            We provide flooring and surface finishing solutions
            designed to make residential and commercial spaces
            look beautiful and feel complete.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <img
            src="./images/tile-installer.jpg"
            alt="Modern finished interior"
            className="w-full h-[420px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <p className="text-amber-700 font-bold uppercase tracking-widest text-sm">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
            Beautiful Floors. Quality Finishes.
          </h2>

          <p className="text-slate-600 mt-6 leading-8">
            Royal Tile and Terrazzo Clinic focuses on tile
            installation, terrazzo installation, terrazzo
            polishing, floor repairs and restoration, and tile
            supply and sales.
          </p>

          <p className="text-slate-600 mt-4 leading-8">
            Our aim is to help customers find practical,
            attractive flooring solutions that suit their
            spaces and project requirements.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-amber-500 hover:bg-amber-400 text-slate-950 px-7 py-4 rounded font-bold"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>

      <section className="bg-stone-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What We Focus On
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Quality Workmanship",
                text: "Careful installation and finishing across our flooring services.",
              },
              {
                title: "Customer Satisfaction",
                text: "Understanding each customer's needs and project expectations.",
              },
              {
                title: "Practical Solutions",
                text: "Helping customers choose suitable services for their spaces.",
              },
              {
                title: "Tile Sales",
                text: "We offer cheap and affordable tiles with longlife durabiity and texture."
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-4 leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
