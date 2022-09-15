module.exports = {
  // async up(queryInterface, Sequelize) {
  //   await queryInterface.bulkInsert('Users', [{
  //     name: 'Анна',
  //     login: 'anya@anya.ru',
  //     password: '123',
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
