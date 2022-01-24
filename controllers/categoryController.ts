import { Request, Response } from 'express';
import { categoryModel } from '../models/categoryModel';



export const getAllCategories = async( req: Request , res: Response ) => {
    
    try{
        const categories = await categoryModel.findAll();
        res.json({
            data: categories,
            results: categories.length
        });
    }catch(err){
        res.status(500).json({
            err
        });
    }
}

export const getCategoryById = async( req: Request , res: Response ) => {
    try{
        const { id } = req.params;
        const category = await categoryModel.findByPk( id );
        if( category ) {
            res.json({
                data:category,
                results: 1
            });
        } else {
            res.status(404).json({
                msg: `No existe una categoria con el id ${ id }`
            });
        }
    }
    catch(err){
        res.status(500).json({
            err
        });
    }
}