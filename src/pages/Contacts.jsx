
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section className="bg-slate-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest font-bold text-sm">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-5">
            Contact Us
          </h1>
          <p className="text-stone-300 mt-6 max-w-2xl text-lg leading-8">
            Have a question or a flooring project? Reach out to
            Royal Tile and Terrazzo Clinic.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Let's Discuss Your Project
            </h2>

            <p className="text-slate-600 mt-5 leading-8">
              Contact us to ask about our services, discuss your
              flooring requirements or request a quotation.
            </p>

            <div className="mt-10 space-y-7">

              <div>
                <p className="text-sm text-amber-700 font-bold uppercase">
                  Phone
                </p>
                <a
                  href="tel:+256752804572"
                  className="text-xl font-semibold text-slate-900 hover:text-amber-600"
                >
                  0752 804 572
                </a>
              </div>

              <div>
                <p className="text-sm text-amber-700 font-bold uppercase">
                  Email
                </p>
                <a
                  href="mailto:mpagiarthur@gmail.com"
                  className="text-xl font-semibold text-slate-900 hover:text-amber-600 break-all"
                >
                  mpagiarthur@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-amber-700 font-bold uppercase">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/256752804572?text=Hello%20Royal%20Tile%20and%20Terrazzo%20Clinic.%20I%20would%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>

          <div className="bg-stone-100 rounded-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Need a Quotation?
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              Tell us about your project, the type of flooring
              you need and how we can reach you.
            </p>

            <Link
              to="/quote"
              className="inline-block mt-8 bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white px-8 py-4 rounded font-bold transition"
            >
              Request a Quote
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
