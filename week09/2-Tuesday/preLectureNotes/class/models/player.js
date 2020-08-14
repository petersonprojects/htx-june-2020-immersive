'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.player.belongsTo(models.team, {foreignKey: 'teamID'});
    }
  };
  player.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    teamID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};