import { Request, Response } from 'express';
import {Op} from 'sequelize'
import { categoryModel } from '../models/categoryModel';
import {productModel} from '../models/productModel';
import { getPagination, getPagingData } from '../utils/pagination';
import { convertToNumber, OrderParams, validateOrderFormat } from '../utils/validations';



export const searchProducts = async( req: Request , res: Response ) => {
    
    try{
        
        // const {page, size, order, filter, category} = req.query;
        let {page, size, orderby, ordermode, filter, category} = req.query;
        
        orderby = orderby as string | undefined;
        ordermode = ordermode as string | undefined;
        
        const order: OrderParams = {
            orderby,
            ordermode
        }
        
        //parsed attributes
        const pageNumber = convertToNumber(page);
        const pageSize = convertToNumber(size);
        const categoryNumber = convertToNumber(category);
        const {orderby: orderBy, ordermode:orderMode} = validateOrderFormat(order);
        
        
        //Clausula where
        let conditions = {};
        if(filter){
            if(categoryNumber){
                //category and filter exist
                conditions = {
                    [Op.and]: [
                        {
                            name: {
                                [Op.like]: `%${filter}%`
                            }
                        },
                        {
                            category: categoryNumber
                        }
                    ]
                };
            }else{
                //only filter exist
                conditions = {
                    name: {[Op.like]: `%${filter}%`}
                };
            }
        }else{
            if(categoryNumber){
                //only category exist
                conditions = {
                    category: categoryNumber
                };
            }else{
                //no filter and category
                conditions = {};
            }
        }
        
        
        const {limit, offset} = getPagination(pageNumber, pageSize);
        
        const data = await productModel.findAndCountAll({
            attributes: ['id', 'name', 'url_image', 'price', 'discount'],
            where: conditions,
            order: [[orderBy, orderMode]],
            limit,
            offset,
            include: categoryModel
        });
        
        if(data.rows.length === 0){
            return res.status(404).send({
                products:[],
                message: 'No hay productos que coincidan con los filtros'
            });
        }
        
        const result= getPagingData(data, pageNumber, pageSize);
        
        res.json(result);
        
    }catch(error){
        res.status(500).json({
            error
        });
    }
}