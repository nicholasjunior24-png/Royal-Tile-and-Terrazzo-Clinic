
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { staffLogin } from "../../services/adminApi";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await staffLogin(username, password);
      navigate("/staff/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Royal Tile
          </h1>

          <p className="mt-2 text-slate-500">
            Staff Management Portal
          </p>
        </div>

        {error && (
          <div role="alert" className="mb-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              autoComplete="username"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-amber-500 py-3 font-bold text-slate-950 hover:bg-amber-400 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Authorized staff only.
        </p>
      </div>
    </div>
  );
}

export default Login;
