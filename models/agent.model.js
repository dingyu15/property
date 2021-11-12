const {Model, DataTypes} = require('sequelize');

module.exports = function(connection) {
  class Agent extends Model {}

  Agent.init(
      {
        //Add data columns & properties
        /* 
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        data_column_name:{
          type: __________,
          allowNull: false,
          field: "__________",
        }
        */
      },
      {
        sequelize: connection,
        modelName: "Agent",
        tableName: "Agents",
      }
    );
    return Agent;
}