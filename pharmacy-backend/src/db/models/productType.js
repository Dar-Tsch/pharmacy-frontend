'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProductType.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        }

    }, {
        sequelize,
        modelName: 'ProductType',
        underscored: true,
        tableName: 'product_types',
        timestamps: false
    });
    ProductType.associate = models => {
        ProductType.hasMany(models.Product,{
            foreignKey: {
                type: DataTypes.INTEGER
            }
        });
    }
    return ProductType;
};
