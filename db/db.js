import Sequelize, { DataTypes } from 'sequelize';

//tables
import productsTable from './tables/product';
import contentsTable from './tables/content';

const Conn = new Sequelize(
  'graphql',
  'root',
  'hehe123',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

const Product = Conn.define('product', productsTable);
const Content = Conn.define('content', contentsTable);
Product.hasMany(Content);

export default Conn;

Conn.sync(/*{force: true}*/).then(() => {
  console.log("TABLES INSTALLED");
});