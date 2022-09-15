const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Zodiac extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Review, {
        foreignKey: 'zodiac_id',
      });
    }
  }
  Zodiac.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    plus: DataTypes.TEXT,
    minus: DataTypes.TEXT,
    photo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Zodiac',
  });
  return Zodiac;
};
