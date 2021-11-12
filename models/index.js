const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// );
const sequelize = new Sequelize('sqlite:memory:');
const Customer = require('./customer.model')(sequelize);
const Agent = require('./agent.model')(sequelize);
const Property = require('./property.model')(sequelize);


(async() => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({force:true});
        console.log('Connection to database established successfully.')
    } catch(error){
        console.error("Unable to connect to database", error);
        throw error;
    }
})();

module.exports = {
    Customer,
    Agent,
    Property
};