import {Router} from "express";
import { methodsHTTP as creyenteController} from "../controllers/creyentes.controllers.js";
const router = Router();

router.get("/",creyenteController.getCreyentes);

export default router;