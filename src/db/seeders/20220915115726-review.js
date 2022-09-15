module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [{
      text: 'Мне очень нравятся люди этого знака зодиака. Они всегда как-то интересно смотрят на жизнь.',
      plus: 'Могут поддержать в любой момент времени и найти нужное слово. Никогда не перестают стремиться к лучшему.',
      minus: 'Тяжело воспринимают критику и противоположное мнение.',
      zodiac_id: 17,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
