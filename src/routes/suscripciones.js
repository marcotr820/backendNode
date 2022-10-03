import {Router} from "express";
import { 
        deleteSuscripcion, 
        getSuscripciones,
        postSuscripcion, 
        putSuscripcion,
        getSuscripcion } from "../controllers/suscripciones";

const router = Router();

router.get('/suscripciones', getSuscripciones);

router.get('/suscripciones/:id', getSuscripcion);

router.post('/suscripciones', postSuscripcion);

router.delete('/suscripciones/:id', deleteSuscripcion);

router.put('/suscripciones/:id', putSuscripcion)

export default router