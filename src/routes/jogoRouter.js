import { Router } from "express";
import * as jogoController from "../controllers/jogoController.js";

const router = Router();

router.get("/", jogoController.listar);

router.get("/:id", jogoController.buscar);

router.post("/", jogoController.criar);

router.put("/:id", jogoController.atualizarJogo);

router.delete("/:id", jogoController.remove);

export default router;