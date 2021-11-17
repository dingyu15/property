const express = require('express');
const router = express.Router();


const {agentSignUp, agentLogin, findSelectedAgent, getAllAgents} = require('../controllers/agent.controller');
// router.post('/agent/register', async (request,response) => await agentSignUp(request,response));
// router.post('/agent/login', async (request,response) => await agentLogin(request,response));
//     //Change the request.params variable name ':agentId' if required
// router.get('/agent/:agentId', async (request, response) => await findSelectedAgent(request,response));
router.get('/agent/all', async (request, response) => await getAllAgents(request,response));

// const {customerSignUp, customerLogin} = require('../controllers/customer.controller');  
// router.post('/customer/register', async (request,response) => await customerSignUp(request,response));
// router.post('/customer/login', async (request,response) => await customerLogin(request,response));


const {findSelectedProperty, latest6Properties, searchProperties, getAllProperties} = require('../controllers/property.controller');  
    //Change the request.params variable name ':propertyId' if required
// router.get('/properties/:propertyId', async (request,response) => await findSelectedProperty(request,response));
router.get('/properties/latest/6', async (request,response) => await latest6Properties(request,response));
router.get('/properties/search/:price', async (request,response) => await searchProperties(request,response))
router.get('/properties/search/isRent/:isRent', async (request,response) => await searchProperties(request,response));
router.get('/properties/search/isSale/:isSale', async (request,response) => await searchProperties(request,response));
router.get('/properties/all', async (request,response) => await getAllProperties(request,response));


module.exports = router;