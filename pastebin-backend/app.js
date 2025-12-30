import express from "express";
import cors from "cors";

import healthRoute from "./routes/health.js";
import pasteRoutes from "./routes/pastes.js";
import Paste from "./models/Paste.js";
import { getNow } from "./utils/time.js";

const app = express();

app.use(cors());
app.use(express.json());

/* API ROUTES */
app.use("/api/health", healthRoute);
app.use("/api/pastes", pasteRoutes);

/* HTML VIEW ROUTE (MANDATORY BY ASSIGNMENT) */
app.get("/p/:id", async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id);
    if (!paste) return res.sendStatus(404);

    const now = getNow(req);
    console.log("TIME USED:", now);
    if (paste.expiresAt && now >= paste.expiresAt) return res.sendStatus(404);
    if (paste.maxViews !== null && paste.views >= paste.maxViews) return res.sendStatus(404);

    paste.views += 1;
    await paste.save();

    const safeContent = paste.content
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

    res.status(200).send(`<pre>${safeContent}</pre>`);
  } catch {
    res.sendStatus(404);
  }
});

export default app;
