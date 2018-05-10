import {DataTypes} from "sequelize";

const contentsTable = {
  contentType: {
    type: DataTypes.ENUM('ov2d', 'ov360', 'ovvideo', 'ovtour'),
    allowNull: false
  }
};

export default contentsTable;

