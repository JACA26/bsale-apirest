import { Router } from "express";
import { getAllCategories, getCategoryById } from "../controllers/categoryController";

const routes = Router();

routes.get("/", getAllCategories);
routes.get("/:id", getCategoryById);

export default routes;