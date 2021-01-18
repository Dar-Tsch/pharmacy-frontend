const router = require('express').Router();
const register = require('./register');
const login = require('./login');
const products = require('./products');
const productTypes = require('./productTypes');
const productPurposes = require('./productPurposes');

router.use('/register', register);
router.use('/login', login);
router.use('/products', products);
router.use('/product/types', productTypes);
router.use('/product/purposes', productPurposes);
module.exports = router;

/*
  POST /api/login
  POST /api/register
  
  GET /api/products - список продуктів
  POST /api/products - додати новий продуктів
  GET /api/products/1 - отримати перший продукт (продукт в базі даних повинен мати id=1)
  PUT /api/products/1 - відредагувати перший елемент
  DELETE /api/products/1 - видалити перший елемент

  GET /api/product/types - список  типів продуктів
  POST /api/product/types - додати новий тип продуктів
  GET /api/product/types/1 - отримати перший тип продукту (продукт в базі даних повинен мати id=1)
  PUT /api/product/types/1 - відредагувати перший елемент
  DELETE /api/product/types/1 - видалити перший елемент
  
  GET /api/product/purposes - список продуктів
  POST /api/product/purposes - додати новий продуктів
  GET /api/product/purposes/1 - отримати перший продукт (продукт в базі даних повинен мати id=1)
  PUT /api/product/purposes/1 - відредагувати перший елемент
  DELETE /api/product/purposes/1 - видалити перший елемент
  
*/