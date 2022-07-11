'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deliver extends Model {
    static associate({ Sudject }) {
      this.belongsTo(Sudject, {
        foreignKey: 'deliver_id',
      });
    }
  }
  Deliver.init({
    deliver_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Sudject',
      },
    },
    name_org: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    address_fact: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    inn: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    plazma_max: DataTypes.INTEGER,
    plazma_cena: DataTypes.INTEGER,
    erm_max: DataTypes.INTEGER,
    erm_cena: DataTypes.INTEGER,
    immg_max: DataTypes.INTEGER,
    immg_cena: DataTypes.INTEGER,
    alb_max: DataTypes.INTEGER,
      alb_cena: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Deliver',
  });
  return Deliver;
};
