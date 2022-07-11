'use strict';
const {
Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sudject extends Model {
    static associate({ Deliver }) {
      this.hasMany(Deliver, { foreignKey: 'deliver_id' });
    }
  }
  Sudject.init({
    name: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Sudject',
  });
  return Sudject;
};
