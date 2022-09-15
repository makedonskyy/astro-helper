'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.belongsTo(models.Zodiac, {
        foreignKey: 'zodiac_id',
      });
    }
  }
  Review.init({
    text: DataTypes.TEXT,
    plus: DataTypes.TEXT,
    minus: DataTypes.TEXT,
    zodiac_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};