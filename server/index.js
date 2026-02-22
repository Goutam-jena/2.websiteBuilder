import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import websiteRouter from "./routes/website.routes.js";
import billingRouter from "./routes/billing.routes.js";
import { stripeWebhook } from "./controllers/stripeWebhook.controller.js";

dotenv.config();

const app = express();

// ======================
// PORT (Required for Render)
// ======================
const PORT = process.env.PORT || 5000;

// ======================
// Stripe Webhook (must be before express.json)
// ======================
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// ======================
// Middlewares
// ======================
app.use(express.json());
app.use(cookieParser());

// ======================
// CORS Setup (Production Ready)
// ======================
const allowedOrigins = [
  "http://localhost:5173",
  "https://2-website-builder-wa4f.vercel.app" // your main frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow Postman / mobile apps
      if (!origin) return callback(null, true);

      // exact match
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // allow all Vercel preview deployments
      if (origin && origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      return callback(new Error("CORS not allowed"));
    },
    credentials: true,
  })
);

// ======================
// Routes
// ======================
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/website", websiteRouter);
app.use("/api/billing", billingRouter);

// ======================
// Health Check Route
// ======================
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// ======================
// Start Server (Important for Render)
// ======================
app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDb();
});
