const e = require("express");
const {Property, Agent, Customer} = require("../models/index.js");

async function addProperty(price, location, bedrooms, size, isSale, isRent){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }
        
        //Fetch the properties (both rent and sale) currently on the market:
        const property = await Property.findOne({where: {price, location, noOfBedrooms: bedrooms, sizeInSqFt: size}});
        
        //Validation
        if (property) {
            response.status = 400;
            response.message = `Property ${property.id} already exists. Update property instead.`;
            return response;
        };

        // Add newProperty to the property list and update database:
        const newProperty = await Property.create({
            price,
            location,
            noOfBedrooms: bedrooms,
            sizeInSqFt: size,
            isSale,
            isRent
        });

        //Prepare and send response:
        response.message = `Property ${newProperty.id} added successfully.`;
        response.status = 200;
        response.data = newProperty;

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

async function searchProperties(price){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }

        const newPropertyData = [];
        const property = await Property.findAll();
        
        const propertyData = property.map(function(result) {
            return result;
        });
       
        for (let i = 0; i < propertyData.length; i++)  {
            if (propertyData[i].price === price) { 
                newPropertyData.push(propertyData[i])
                response.data = newPropertyData; 
            }
        }
        
        if(response.data === null) {
            response.status = 404;
            response.message = `Property with price $${price} is not found.`;
        }
        else {
            response.status = 200;
            response.message = `Display a list of properties with price $${price}.`;
        }
        
        return response;

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

async function getAll(){
    try{
        //Fetch the property & associated agent(+ customers):
        const property = await Property.findAll({include:[{model:Agent, as:"agent"}, {model:Customer, as:"customer"}]});

        //Region validation
        if (!property) {
            response.status = 200;
            response.message = "There are no properties stored in database";
            return response;
        };
        if (property) {
            response.status = 200;
            response.message = "List of properties in database with agents-in-charge and interested customers";
            response.data = property;
            return response;
        };
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    addProperty,
    // updateProperty,
    // removeProperty,
    getLatestProperties,
    searchProperties,
    // getById,
    getAll,
};