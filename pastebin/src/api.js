const BACKEND_URL = "http://localhost:5000";

export const createPaste = async (data) => {
  const res = await fetch(`${BACKEND_URL}/api/pastes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed");
  }

  return res.json();
};
