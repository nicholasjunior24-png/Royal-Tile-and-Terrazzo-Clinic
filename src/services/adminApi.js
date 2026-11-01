
const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";

export function getAdminToken() {
  return localStorage.getItem("admin_token");
}

export async function adminRequest(endpoint, options = {}) {
  const token = getAdminToken();

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Token ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (response.status === 401 || response.status === 403) {
    if (response.status === 401) {
      localStorage.removeItem("admin_token");
    }

    throw new Error(
      data.detail || "You are not authorized to perform this action."
    );
  }

  if (!response.ok) {
    throw new Error(
      data.detail || "Something went wrong with the request."
    );
  }

  return data;
}

export async function staffLogin(username, password) {
  const response = await fetch(`${API_URL}/quotations/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.detail || "Login failed.");
  }

  localStorage.setItem("admin_token", data.token);

  return data;
}

export async function staffLogout() {
  try {
    await adminRequest("/quotations/logout/", {
      method: "POST",
    });
  } finally {
    localStorage.removeItem("admin_token");
  }
}
