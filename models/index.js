const bcrypt = require('bcrypt');
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
Property.belongsTo(Customer, {
  foreignKey:"customerId",
  as:"customer"
});

Property.belongsTo(Agent, {
  foreignKey:"agentId",
  as:"agent"
});

(async() => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({force:true});
        await addData();
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
      noOfBedrooms: 5,
      sizeInSqFt: 700,
      isSale: true,
    });

    await Property.create({
      price: 700000,
      location: 'Toa Payoh',
      noOfBedrooms: 4,
      sizeInSqFt: 1500,
      isRent: true,
    });

    await Property.create({
      price: 800000,
      location: 'Ang Mo Kio',
      noOfBedrooms: 5,
      sizeInSqFt: 1850,
      isRent: true,
    });

    await Property.create({
      price: 400000,
      location: 'Jurong',
      noOfBedrooms: 5,
      sizeInSqFt: 950,
      isSale: true,
    });

    await Property.create({
      price: 750000,
      location: 'Bishan',
      noOfBedrooms: 5,
      sizeInSqFt: 1700,
      isSale: true,
    });

    await Property.create({
      price: 800000,
      location: 'Bedok',
      noOfBedrooms: 5,
      sizeInSqFt: 200,
      isRent: true,
    });

    await Agent.create({
      fullName: 'Jerome Tan',
      contactNo: 92223463,
      email: 'jerome.tan@property.com',
      pwd: await textToHash('agent1'),
      specialty: 'Luxury',
      region: 'North',
    });
    await Agent.create({
      fullName: 'Mary Tay',
      contactNo: 98642614,
      email: 'mary.tay@property.com',
      pwd: await textToHash('agent2'),
      specialty: 'HDB',
      region: 'West',
    });
    await Agent.create({
      fullName: 'Lee Su En',
      contactNo: 99420043,
      email: 'suen.lee@property.com',
      pwd: await textToHash('agent3'),
      specialty: 'Condominium',
      region: 'East',
    });
    await Agent.create({
      fullName: 'Tan Wen Chang',
      contactNo: 99420043,
      email: 'wenchang.tan@property.com',
      pwd: await textToHash('agent4'),
      specialty: 'HDB',
      region: 'South',
    });

  } catch(error){
    console.log(error);
  }
};

function textToHash(plainText) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plainText, 10, (err, hash)=>{
        if (err) {
            console.log(err);
            reject(err);
        };
        resolve(hash);
    });
  });
};

module.exports = {
    Customer,
    Agent,
    Property
};