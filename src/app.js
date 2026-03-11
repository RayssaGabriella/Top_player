import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js"
import jogoRouter from "./routes/jogoRouter.js";

const app = express();
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json({msg: "Hello World"})
})

app.use("/usuarios", usuarioRoutes);
app.use("/jogos", jogoRouter);

export default app;