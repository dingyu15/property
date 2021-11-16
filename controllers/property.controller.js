const service = require("../services/property.service");

async function handleAddProperty(request, response){
    try{
        if(typeof request.body.price !== "number" || typeof request.body.noOfBedrooms !== "number" || typeof request.body.sizeInSqFt !== "number") {
            response.status(400);
            return response.json({message:"Incorrect request data"});
        };
        const result = await service.addProperty(request.body.price, request.body.location, request.body.noOfBedrooms, request.body.sizeInSqFt, request.body.isSale, request.body.isRent);
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

// http://localhost:3000/general/properties/search/500000
async function searchProperties(request, response) {
    try{
        if (typeof parseInt(request.params.price) !== 'number') {
            response.status(400); // bad request
            return response.json({ message: 'Incorrect request data' });
        }
          
        const result = await service.searchProperties(parseInt(request.params.price));    
        response.status(result.status);
        return response.json({ data: result.data, message: result.message });
        
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