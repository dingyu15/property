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

async function updateAgent(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function deleteAgent(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function findSelectedAgent(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function getAllAgents(request, response) {
    try{
        //Add code here:




        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};



module.exports = {
    agentSignUp,
    agentLogin,
    updateAgent,
    deleteAgent,
    findSelectedAgent,
    getAllAgents,    
}