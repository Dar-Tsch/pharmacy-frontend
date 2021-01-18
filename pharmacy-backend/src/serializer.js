const Serializer = require('sequelize-json-serializer');
const {
    User,
    Product,
    ProductType,
    ProductPurpose
} = require('./db/models');

Serializer.defineSchema(User, {
    fields: [
        'id',
        'email',
        'isAdmin'
    ]
});

Serializer.defineSchema(ProductType, {
    fields: [
        'id',
        'name'
    ]
});

Serializer.defineSchema(ProductPurpose, {
    fields: [
        'id',
        'name'
    ]
});

Serializer.defineSchema(Product, {
    fields: [
        'id',
        'title',
        'price',
        'description',
        'imageUrl',
        'productTypeId'
    ]
});

module.exports = Serializer;
