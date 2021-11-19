const service = require("../services/agent.service");

async function agentSignUp(request, response){
    try{

        //Add code here:

        /* Example:
        const result = await service.signup(request.body.email, request.body.password);
        return response.json(result);
        */
        
        return;

    } catch (error){
        console.log(error);
        throw error;
    }
};

async function agentLogin(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function findAgentBySpecialty(request, response) {
    try{
        if ((request.params.search) === 'luxury' || (request.params.search) === 'hdb' || (request.params.search) === 'condominium') {
            const result = await service.findBySpecialty(request.params.search);    
            response.status(result.status);
            return response.json({ data: result.data, message: result.message }); 
        } else {
            response.status(400);
            return response.json({ message: `${request.params.search} is an incorrect request data for specialty` });
        }
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function findAgentByRegion(request, response) {
    try{
        if ((request.params.search) === 'north' || (request.params.search) === 'south' || (request.params.search) === 'east' || (request.params.search) === 'west') {
            const result = await service.findByRegion(request.params.search);    
            response.status(result.status);
            return response.json({ data: result.data, message: result.message }); 
        } else {
            response.status(400);
            return response.json({ message: `${request.params.search} is an incorrect request data for region` });

        }
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function findSelectedAgent(request, response) {
    try{
        const agentId = Number(request.params.agentId);
        if(typeof agentId === NaN) {
            response.status(400);
            return response.json({message:"Incorrect request data"});
        }
        const result = await service.getById(agentId);
        response.status(result.status);
        return response.json({ data: result.data, message: result.message });
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function getAllAgents(request, response) {
    try{
        response.status(200);
        const result = await service.getAll();
        return response.json(result);
    } catch (error){
        console.log(error);
        throw error;
    }
};



module.exports = {
    // agentSignUp,
    // agentLogin,
    findAgentBySpecialty,
    findAgentByRegion,
    findSelectedAgent,
    getAllAgents,    
}