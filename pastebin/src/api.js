const BACKEND_URL = import.meta.env.VITE_API_URL;

export const createPaste = async (data) => {
  const res = await fetch(`${BACKEND_URL}/pastes`, {
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
