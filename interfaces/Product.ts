
import {Model, DataTypes, Optional} from 'sequelize';


interface ProductAttributes {
    id: number;
    name: string;
    url_image: string;
    price: number;
    discount: number;
    // category: number;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

export interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes {}