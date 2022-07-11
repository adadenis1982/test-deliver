'use strict';

const fs = require('fs').promises;
const path = require('path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pathFromFile = path.resolve(process.env.PWD, 'subject', 'subject_list.txt')
    const arraySubject = await fs.readFile(`${pathFromFile}`, 'utf-8');
    const subjects = arraySubject
      .trim()
      .split('\n')
      .map((el) => ({
        code: `${el.split(',')[0]}00000000`,
        name: el.split(',')[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Sudjects', subjects, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sudjects', null, {});
  },
};
