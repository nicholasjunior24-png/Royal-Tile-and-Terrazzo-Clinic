
import { useState } from "react";
import { submitQuotation } from "../services/api";

function Quote() {
  const [formData, setFormData] = useState({
    customer_name: "",
    phone_number: "",
    email: "",
    service: "",
    location: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const quotation = await submitQuotation(formData);

      setSuccessMessage(
        `Your quotation request has been submitted successfully! Reference number: ${quotation.id}. We will contact you soon.`
      );

      setFormData({
        customer_name: "",
        phone_number: "",
        email: "",
        service: "",
        location: "",
        description: "",
      });
    } catch (error) {
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-stone-50 px-5 py-16">
      <div className="mx-auto max-w-3xl">

        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-amber-600">
            Get Started
          </p>

          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Request a Quotation
          </h1>

          <p className="text-slate-600">
            Tell us about your flooring or tiling project.
            Our team will review your request and get in touch.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-white p-6 shadow-lg md:p-10"
        >

          {successMessage && (
            <div
              role="status"
              className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800"
            >
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
            >
              {errorMessage}
            </div>
          )}

          <div>
            <label className="mb-2 block font-semibold text-slate-800">
              Full Name *
            </label>

            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={150}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-800">
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              placeholder="+256..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-800">
              Email Address (Optional)
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-800">
              Service Required *
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-amber-500"
            >
              <option value="">Select a service</option>
              <option value="tile_installation">
                Tile Installation
              </option>
              <option value="terrazzo_installation">
                Terrazzo Installation
              </option>
              <option value="terrazzo_polishing">
                Terrazzo Polishing
              </option>
              <option value="floor_repairs">
                Floor Repairs and Restoration
              </option>
              <option value="tile_supply">
                Tile Supply and Sales
              </option>
              <option value="other">
                Other Services
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-800">
              Project Location *
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g. Kampala, Uganda"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-800">
              Project Description *
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              minLength={10}
              rows={5}
              placeholder="Describe the work you need, approximate floor area, materials, or other details..."
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-amber-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting Request..." : "Submit Quotation Request"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Your information will be used to respond to your quotation request.
          </p>

        </form>
      </div>
    </section>
  );
}

export default Quote;

