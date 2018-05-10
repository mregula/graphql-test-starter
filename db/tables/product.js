import {DataTypes} from "sequelize";

const productsTable = {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export default productsTable;

