const service = require("../services/property.service");

async function handleAddProperty(request, response){
    try{

        //Add code here:

        /* Example:,
        const result = await service.addProperty(request.body.id, request.body.valuation, request.body.location, request.body.bedrooms, request.body.squareFeet, request.body.saleOrRent));
        return response.json(result);
        */
        
        return;

    } catch (error){
        console.log(error);
        throw error;
    }
};

async function handleUpdateProperty(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function handleDeleteProperty(request, response) {
    try{
        //Add code here:



        
        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function findSelectedProperty(request, response) {
    try{
        //Add code here:




        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function getAllProperties(request, response) {
    try{
        //Add code here:




        return;
    } catch (error){
        console.log(error);
        throw error;
    }
};



module.exports = {
    handleAddProperty,
    handleUpdateProperty,
    handleDeleteProperty,
    findSelectedProperty,
    getAllProperties,    
}