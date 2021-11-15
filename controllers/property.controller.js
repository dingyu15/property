const service = require("../services/property.service");

async function handleAddProperty(request, response){
    try{
        if(typeof propertyId !== "number" || typeof valuation !== "number" || typeof bedrooms !== "number" || typeof sqFt !== "number") {
            response.status(400);
            return response.json({message:"Incorrect request data"});
        };
        const {price, location, bedrooms, sqFt, isSale, isRent} = request.body;
        const result = await service.addProperty(price, location, bedrooms, sqFt, isSale, isRent);
        return response.json(result);
    } catch (error){
        console.log(error);
        throw error;
    }
};

// async function handleUpdateProperty(request, response) {
//     try{
//         //Add code here:

            /* Example:,
            const result = await service.addProperty(request.body.id, request.body.valuation, request.body.location, request.body.bedrooms, request.body.squareFeet, request.body.saleOrRent);
            return response.json(result);
            */
        
//         return;
//     } catch (error){
//         console.log(error);
//         throw error;
//     }
// };

// async function handleDeleteProperty(request, response) {
//     try{
//         //Add code here:



        
//         return;
//     } catch (error){
//         console.log(error);
//         throw error;
//     }
// };

async function latest6Properties(request, response) {
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

async function searchProperties(request, response) {
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

// async function findSelectedProperty(request, response) {
//     try{
//         //Add code here:




//         return;
//     } catch (error){
//         console.log(error);
//         throw error;
//     }
// };

async function getAllProperties(request, response) {
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
    handleAddProperty,
    // handleUpdateProperty,
    // handleDeleteProperty,
    latest6Properties,
    searchProperties,
    // findSelectedProperty,
    getAllProperties,    
}