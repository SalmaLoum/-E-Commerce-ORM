// import models
const Product = require('./Product')
const Category = require('./Category')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')

// Product belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Product,
    unique: false,
  }, 
})

// Categories have many Product


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    as: 'products'
  }, 
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    as: 'products'
  },
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
}
