import express from "express";

import cors from "cors";

import suscripcionesRoutes  from "./routes/suscripciones";

const app = express();

app.use(cors());
app.use(express.json());

app.use(suscripcionesRoutes);

export default app;