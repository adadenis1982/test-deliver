'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Delivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deliver_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Sudjects',
        },
      },
      name_org: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      address_fact: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      inn: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      plazma_max: {
        type: Sequelize.INTEGER
      },
      plazma_cena: {
        type: Sequelize.INTEGER
      },
      erm_max: {
        type: Sequelize.INTEGER
      },
      erm_cena: {
        type: Sequelize.INTEGER
      },
      immg_max: {
        type: Sequelize.INTEGER
      },
      immg_cena: {
        type: Sequelize.INTEGER
      },
      alb_max: {
        type: Sequelize.INTEGER
      },
      alb_cena: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Delivers');
  }
};
