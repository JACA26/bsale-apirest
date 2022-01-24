import {Router} from "express";
import { getProductById } from '../controllers/productsController';


const routes = Router();

routes.get("/:id", getProductById);

export default routes;