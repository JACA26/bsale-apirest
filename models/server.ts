import express, { Application } from 'express';
import cors from 'cors';

import db from '../db/connection';
import { BaseError } from 'sequelize/types';

//swagger
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

//Routes Import
import searchRoutes from '../routes/search.route';
import categoryRoutes from '../routes/category.route';
import productRoutes from '../routes/product.route';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        producto: '/api/products',
        buscar: '/api/products/search',
        categorias: '/api/categories'
    }
    
    
    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';
        
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    
    async dbConnection() {
        
        try {
            
            await db.authenticate();
            console.log('Database online');
            
        } catch (error: any) {
            throw new Error( error );
        }
        
    }
    
    middlewares() {
        
        // CORS
        this.app.use( cors() );
        
        // Lectura del body
        this.app.use( express.json() );
        
        // Carpeta pública
        // this.app.use( express.static('public') );
    }
    
    
    routes() {
        
        //Rutas búsqueda de productos
        this.app.use( this.apiPaths.buscar, searchRoutes );
        this.app.use(this.apiPaths.producto, productRoutes);
        
        // Rutas de categorías
        this.app.use( this.apiPaths.categorias, categoryRoutes);
        
        //documentación
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
    
    
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

export default Server;