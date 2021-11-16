const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("postgres://ofhsivxyqfinco:98fbd7f4997ffa957b166711ad2872516a277a463d2be780daaf5a08208993a9@ec2-107-23-213-65.compute-1.amazonaws.com:5432/d1637q152trdki", {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

// Import models
const Customer = require('./customer.model')(sequelize);
const Agent = require('./agent.model')(sequelize);
const Property = require('./property.model')(sequelize);

// Create associations
Customer.belongsTo(Property, {
  foreignKey:"customerId",
  as:"customer"
});

Agent.belongsTo(Property, {
  foreignKey:"agentId",
  as:"agent"
});

(async() => {
    try{
        await sequelize.authenticate();
        //await sequelize.sync({force:true});
        //await addData();
        console.log('Connection to database established successfully.')
    } catch(error){
        console.error("Unable to connect to database:", error);
        throw error;
    }
})();

async function addData(){
  try{
    await Property.create({
      price: 500000,
      location: 'Sembawang',
      noOfBedrooms: 4,
      sizeInSqFt: 700,
      isSale: true,
    });

    await Property.create({
      price: 700000,
      location: 'Canada',
      noOfBedrooms: 6,
      sizeInSqFt: 1500,
      isSale: true,
    });

    await Property.create({
      price: 800000,
      location: 'China',
      noOfBedrooms: 15,
      sizeInSqFt: 1850,
      isSale: true,
    });

    await Property.create({
      price: 1000000,
      location: 'London',
      noOfBedrooms: 9,
      sizeInSqFt: 950,
      isSale: true,
    });

    await Property.create({
      price: 1200000,
      location: 'Paris',
      noOfBedrooms: 10,
      sizeInSqFt: 15000,
      isSale: true,
    });

    await Property.create({
      price: 8000,
      location: 'Europe',
      noOfBedrooms: 11,
      sizeInSqFt: 200,
      isRent: true,
    });

  } catch(error){
    console.log(error);
  }
}

module.exports = {
    Customer,
    Agent,
    Property
};