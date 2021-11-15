const {Model, DataTypes} = require('sequelize');

module.exports = function(connection) {
  class Customer extends Model {}

  Customer.init(
      {
        //Add data columns & properties
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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
        fullName:{
          type: DataTypes.STRING,
          allowNull: false,
          field: "full_name",
        },
        favouritedProperties:{
          type: DataTypes.STRING,
          allowNull: false,
          field: "favourite_properties"
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
        modelName: "Customer",
        tableName: "Customers",
      }
    );
    return Customer;
}