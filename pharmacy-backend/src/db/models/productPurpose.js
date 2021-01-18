'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductPurpose extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProductPurpose.init({
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
        modelName: 'ProductPurpose',
        underscored: true,
        tableName: 'product_purposes',
        timestamps: false
    });
    ProductPurpose.associate = models => {
        ProductPurpose.hasMany(models.Product, {
            foreignKey: {
                type: DataTypes.INTEGER
            }
        });
    }
    return ProductPurpose;
};
