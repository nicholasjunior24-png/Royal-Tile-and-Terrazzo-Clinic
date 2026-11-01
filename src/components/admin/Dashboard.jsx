
import { useEffect, useState } from "react";
import { adminRequest } from "../../services/adminApi";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await adminRequest(
          "/quotations/dashboard/stats/"
        );
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  const cards = stats
    ? [
        { title: "Total Quotations", value: stats.total_quotations },
        { title: "Pending", value: stats.pending },
        { title: "Reviewed", value: stats.reviewed },
        { title: "Approved", value: stats.approved },
        { title: "Rejected", value: stats.rejected },
      ]
    : [];

  if (loading) {
    return <p className="text-slate-600">Loading dashboard...</p>;
  }

  if (error) {
    return <p role="alert" className="text-red-600">{error}</p>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-slate-500">
          Monitor customer quotation requests and their progress.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">
              {card.title}
            </p>

            <p className="mt-3 text-4xl font-bold text-slate-900">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold text-slate-900">
          Quotations by Service
        </h2>

        {stats.service_breakdown.length === 0 ? (
          <p className="text-slate-500">No quotation data yet.</p>
        ) : (
          <div className="space-y-4">
            {stats.service_breakdown.map((item) => (
              <div key={item.service}>
                <div className="mb-2 flex justify-between gap-3 text-sm">
                  <span className="text-slate-700">
                    {item.service.replaceAll("_", " ")}
                  </span>

                  <strong>{item.total}</strong>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{
                      width: `${
                        stats.total_quotations
                          ? (item.total / stats.total_quotations) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
