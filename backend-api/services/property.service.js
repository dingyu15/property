const {Property} = require("../models");

async function addProperty(newPropertyID, price, location, bedrooms, squareFeet, saleOrRent){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }
        
        //Add business logic here:



         
            
        response.status= 200;
        response.message = `Property ${newPropertyID} successfully registered.`;
        return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

// async function updateProperty(propertyID, price, location, bedrooms, squareFeet, saleOrRent){
//     try{
//         const response = {
//             status: null,
//             message: null,
//             data: null
//         }
        
//         //Add business logic here:



         
            
//         response.status= 200;
//         response.message = `Property ${propertyID} successfully registered.`;
//         return response;

//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

// async function removeProperty(propertyID){
//     try {
//         const response = {
//             status: null,
//             message: null,
//             data: null
//         }
       
//         //Add business logic here:




//         response.status= 200;
//         response.message = `Property ${propertyID} successfully deleted.`;
//         return response;
        
//     } catch(error) {
//         console.log(error);
//         throw error;
//     }
// }

async function getLatestProperties(createdAtDate){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }
       
        //Add business logic here:



    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function searchProperties(searchParameter){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }
       
        //Add business logic here:



    } catch(error) {
        console.log(error);
        throw error;
    }
}

// async function getById(id){
//     try{
//         return await Property.findByPk(id);
//     } catch(error) {
//         console.log(error);
//         throw error;
//     }
// }

// async function getAll(){
//     try{
//         return await Property.findAll();
//     } catch(error) {
//         console.log(error);
//         throw error;
//     }
// }

module.exports = {
    addProperty,
    updateProperty,
    removeProperty,
    getLatestProperties,
    searchProperties,
    getById,
    getAll,
};
