import express from "express";
import creyentesRoutes from "./routes/creyentes.routes.js"
import cors from "cors"

const app = express();
console.log(app);

//Middleware
app.set("port", 7000);

app.use(express.json());
app.use(cors());

//Routes
app.use("/api/Creyente",creyentesRoutes);
export default app;