module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Zodiacs', // table name
      'photo', // new field name
      {
        type: Sequelize.TEXT,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Zodiacs', 'photo');
  },
};
