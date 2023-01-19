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
    foreignKey: 'category_id',
  },
})
// Categories have many Product
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: 'tag_id',
  },
  as: 'products',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: 'product_id',
  },
  as: 'Products',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
}
