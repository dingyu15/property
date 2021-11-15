const {Model, DataTypes} = require('sequelize');

module.exports = function(connection) {
  class Property extends Model {}

  Property.init(
      {
        //Add data columns & properties
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "price",
        },
        location: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "location",
        },
        noOfBedrooms:{
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "bedrooms",
        },
        sizeInSqFt:{
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "size"
        },
        isSale:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          },
        isRent:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        modelName: "Property",
        tableName: "Properties",
      }
    );
    return Property;
}