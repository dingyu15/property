const service = require("../services/customer.service");

async function customerSignUp(request, response){
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

async function customerLogin(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function updateCustomer(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function deleteCustomer(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function findSelectedCustomer(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function getAllCustomers(request, response) {
    try{
        //Add code here:




        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};


module.exports = {
    customerSignUp,
    customerLogin,
    updateCustomer,
    deleteCustomer,
    findSelectedCustomer,
    getAllCustomers,    
}