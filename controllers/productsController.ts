import { Request, Response } from "express";
import { json } from "sequelize/types";
import { productModel } from "../models/productModel";

export const getProductById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
        
		const product = await productModel.findByPk(id);
        
		if (product) {
			res.json(product);
		} else {
			res.status(404).json({
				msg: `No existe un usuario con el id ${id}`,
			});
		}
	}catch(err) {
		res.status(500).json({
			err,
		});
	}
};
