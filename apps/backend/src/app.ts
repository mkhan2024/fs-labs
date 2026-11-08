import express from "express";
import cors from "cors";
import morgan from "morgan";
import { corsOptions } from "./config/cors.js";
import employeeRoutes from "./api/v1/routes/employeeRoutes.js";
import roleRoutes from "./api/v1/routes/roleRoutes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));

// simple check
app.get("/", (_req, res) => {
  res.send("Pixell River Financial API is running");
});

// routes
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/roles", roleRoutes);

export default app;