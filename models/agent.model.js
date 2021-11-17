const {Model, DataTypes} = require('sequelize');

module.exports = function(connection) {
  class Agent extends Model {}

  Agent.init(
      {
        //Add data columns & properties
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        fullName:{
          type: DataTypes.STRING,
          allowNull: false,
          field: "full_name",
        },
        contactNo:{
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "contact_no"
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "email",
        },
        pwd: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "password",
        },
        createdAt: {
          type: DataTypes.DATE,
          field: "created_at",
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: "updated_at",
        },
      },
      {
        sequelize: connection,
        modelName: "Agent",
        tableName: "Agents",
      }
    );
    return Agent;
}