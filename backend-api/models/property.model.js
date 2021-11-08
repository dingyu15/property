const {Model, DataTypes} = require('sequelize');

module.exports = function(connection) {
  class Property extends Model {}

  Property.init(
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
        modelName: "Property",
        tableName: "Properties",
      }
    );
    return Property;
}