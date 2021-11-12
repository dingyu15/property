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

        price:{
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "price",
        }
        
      },
      {
        sequelize: connection,
        modelName: "Property",
        tableName: "Properties",
      }
    );
    return Property;
}