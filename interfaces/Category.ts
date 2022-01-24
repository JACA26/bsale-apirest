import {Model, Optional} from 'sequelize';


interface CategoryAttributes {
    id: number;
    name: string;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id"> {}

export interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttributes>, CategoryAttributes {}