import { Router } from "express";
import { searchProducts } from "../controllers/searchController";

const routes = Router();

routes.get("/", searchProducts);

export default routes;