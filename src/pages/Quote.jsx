
import { useState } from "react";

function Quote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    details: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = `
Hello Royal Tile and Terrazzo Clinic.

I would like to request a quotation.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Project location: ${form.location}

Project details:
${form.details}
    `;

    const whatsappURL =
      `https://wa.me/256752804572?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <section className="bg-slate-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest font-bold text-sm">
            Start Your Project
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-5">
            Request a Quotation
          </h1>
          <p className="text-stone-300 mt-6 max-w-2xl text-lg">
            Share a few details about your project.
            We'll prepare your inquiry for WhatsApp.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-7 md:p-10 rounded-xl shadow-lg border border-stone-200"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Your Project Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-stone-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-stone-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Service Required *
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full border border-stone-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Choose a service</option>
                <option>Tile Installation</option>
                <option>Terrazzo Installation</option>
                <option>Terrazzo Polishing</option>
                <option>Floor Repairs and Restoration</option>
                <option>Tile Supply and Sales</option>
                <option>Wall and Floor Tiling</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Project Location *
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full border border-stone-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Where is the project?"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-semibold mb-2">
                Describe Your Project *
              </label>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                required
                rows="6"
                className="w-full border border-stone-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Describe the work you need, approximate floor size, preferred materials, etc."
              />
            </div>

          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 py-4 rounded-lg font-bold transition"
          >
            Send Quotation Request via WhatsApp
          </button>

          <p className="text-sm text-slate-500 mt-4 text-center">
            Your WhatsApp application will open with your inquiry
            ready to send. Review it and press Send.
          </p>
        </form>
      </section>
    </div>
  );
}

export default Quote;
