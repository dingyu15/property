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

const Customer = require('./customer.model')(sequelize);
const Agent = require('./agent.model')(sequelize);
const Property = require('./property.model')(sequelize);


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
      price: 500000
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