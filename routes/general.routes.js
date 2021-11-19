const express = require('express');
const router = express.Router();


const {agentSignUp, agentLogin, findAgentBySpecialty, findAgentByRegion, findSelectedAgent, getAllAgents} = require('../controllers/agent.controller');
// router.post('/agent/register', async (request,response) => await agentSignUp(request,response));
// router.post('/agent/login', async (request,response) => await agentLogin(request,response));
router.get('/agent/specialty/:search', async (request, response) => await findAgentBySpecialty(request,response));
router.get('/agent/region/:search', async (request, response) => await findAgentByRegion(request,response));
router.get('/agent/id/:agentId', async (request, response) => await findSelectedAgent(request,response));
router.get('/agent/all', async (request, response) => await getAllAgents(request,response));

// const {customerSignUp, customerLogin} = require('../controllers/customer.controller');  
// router.post('/customer/register', async (request,response) => await customerSignUp(request,response));
// router.post('/customer/login', async (request,response) => await customerLogin(request,response));


const {findSelectedProperty, latest6Properties, searchPropertiesPrice, searchPropertiesRent, searchPropertiesSale, getAllProperties} = require('../controllers/property.controller');
router.get('/properties/id/:propertyId', async (request,response) => await findSelectedProperty(request,response));
router.get('/properties/latest/6', async (request,response) => await latest6Properties(request,response));
router.get('/properties/search/price/:price', async (request,response) => await searchPropertiesPrice(request,response));
router.get('/properties/search/isRent/:isRent', async (request,response) => await searchPropertiesRent(request,response));
router.get('/properties/search/isSale/:isSale', async (request,response) => await searchPropertiesSale(request,response));
router.get('/properties/all', async (request,response) => await getAllProperties(request,response));

module.exports = router;