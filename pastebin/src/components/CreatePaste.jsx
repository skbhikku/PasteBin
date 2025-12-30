import { useState } from "react";
import { createPaste } from "../api";

const CreatePaste = () => {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [views, setViews] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult("");

    try {
      const payload = {
        content,
        ...(ttl && { ttl_seconds: Number(ttl) }),
        ...(views && { max_views: Number(views) })
      };

      const res = await createPaste(payload);
      setResult(res.url);
      setContent("");
      setTtl("");
      setViews("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="6"
          placeholder="Enter your paste here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="number"
          placeholder="TTL (seconds, optional)"
          value={ttl}
          onChange={(e) => setTtl(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="number"
          placeholder="Max views (optional)"
          value={views}
          onChange={(e) => setViews(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button type="submit">Create Paste</button>
      </form>

      {result && (
        <p>
          ✅ Paste URL:{" "}
          <a href={result} target="_blank" rel="noreferrer">
            {result}
          </a>
        </p>
      )}

      {error && <p style={{ color: "red" }}>❌ {error}</p>}
    </>
  );
};

export default CreatePaste;
