
import { useCallback, useEffect, useState } from "react";
import { adminRequest } from "../../services/adminApi";

const statuses = [
  "pending",
  "reviewed",
  "approved",
  "rejected",
];

function Quotations() {
  const [quotations, setQuotations] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadQuotations = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();

      if (search.trim()) params.set("search", search.trim());
      if (statusFilter) params.set("status", statusFilter);

      const query = params.toString();
      const data = await adminRequest(
        `/quotations/manage/${query ? `?${query}` : ""}`
      );

      setQuotations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter]);

  useEffect(() => {
    loadQuotations();
  }, [loadQuotations]);

  async function updateStatus(id, newStatus) {
    try {
      await adminRequest(`/quotations/manage/${id}/`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });

      await loadQuotations();

      if (selected?.id === id) {
        setSelected((previous) => ({
          ...previous,
          status: newStatus,
        }));
      }
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteQuotation(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this quotation?"
    );

    if (!confirmed) return;

    try {
      await adminRequest(`/quotations/manage/${id}/`, {
        method: "DELETE",
      });

      setSelected(null);
      await loadQuotations();
    } catch (err) {
      setError(err.message);
    }
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Quotations
        </h1>

        <p className="mt-2 text-slate-500">
          Review and manage customer quotation requests.
        </p>
      </div>

      {error && (
        <div role="alert" className="mb-5 rounded-lg bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <input
          type="search"
          placeholder="Search name, phone, email or location..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-amber-500"
        />

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-3"
        >
          <option value="">All statuses</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full min-w-[750px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Service</th>
              <th className="p-4">Location</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan="6" className="p-8 text-center">
                  Loading quotations...
                </td>
              </tr>
            ) : quotations.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-8 text-center text-slate-500">
                  No quotations found.
                </td>
              </tr>
            ) : (
              quotations.map((quotation) => (
                <tr key={quotation.id} className="hover:bg-slate-50">
                  <td className="p-4">
                    <strong className="block text-slate-800">
                      {quotation.customer_name}
                    </strong>
                    <span className="text-slate-500">
                      {quotation.phone_number}
                    </span>
                  </td>

                  <td className="p-4">
                    {quotation.service.replaceAll("_", " ")}
                  </td>

                  <td className="p-4">{quotation.location}</td>

                  <td className="p-4">
                    {formatDate(quotation.created_at)}
                  </td>

                  <td className="p-4">
                    <select
                      value={quotation.status}
                      onChange={(event) =>
                        updateStatus(quotation.id, event.target.value)
                      }
                      className="rounded-md border border-slate-200 bg-white px-2 py-2"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => setSelected(quotation)}
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Quotation #{selected.id}
              </h2>

              <button
                onClick={() => setSelected(null)}
                className="rounded-lg px-3 py-1 text-2xl text-slate-500 hover:bg-slate-100"
                aria-label="Close details"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm">
              {[
                ["Customer", selected.customer_name],
                ["Phone", selected.phone_number],
                ["Email", selected.email || "Not provided"],
                ["Service", selected.service.replaceAll("_", " ")],
                ["Location", selected.location],
                ["Submitted", formatDate(selected.created_at)],
                ["Description", selected.description],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-semibold text-slate-500">{label}</p>
                  <p className="mt-1 whitespace-pre-wrap text-slate-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${selected.phone_number}`}
                className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white"
              >
                Call Customer
              </a>

              <a
                href={`https://wa.me/${selected.phone_number.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white"
              >
                WhatsApp
              </a>

              <button
                onClick={() => deleteQuotation(selected.id)}
                className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quotations;
