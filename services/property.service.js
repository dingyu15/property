const { response } = require("express");
const e = require("express");
const {Property, Agent, Customer} = require("../models/index.js");

async function associate(propertyId, agentId) {
    try {
        const response = {
            message: null,
            status: null,
            data: null,
        };

        //Fetch the property and agent:
        const property = await Property.findByPk(propertyId);
        const agent = await Agent.findByPk(agentId);
        
        //validation
        if (!property){
            response.status = 404;
            response.message = `Property not found for ID: ${propertyId}`;
            return response;
        }
        
        if (property.agentId) {
            response.status = 400;
            response.message = "Another agent is already in charge of this property.";
            return response;
        }

        if (!agent){ 
            //Error: No agent 
            response.status = 404;
            response.message = `Agent not found for ID: ${agentId}`;
            return response;
        }; 

        // Add agentId to the property and update database:
        property.agentId = agentId;
        await property.save();

        //Prepare and send response:
        response.message = `Property ID ${propertyId} has been assigned to agent ID ${agentId} successfully.`;
        response.status = 200;
        response.data = property;
        return response;
    } catch (error) {
        console.log(error);
    }
};

async function dissociate(propertyId) {
    try {
        const response = {
            message: null,
            status: null,
            data: null,
        };

        //Fetch the property:
        const property = await Property.findByPk(propertyId);
        
        //validation
        if (!property){
            response.status = 404;
            response.message = `Property not found for ID: ${propertyId}`;
            return response;
        };
        if (!property.agentId) {
            response.status = 400;
            response.message = `Error: Property ID ${propertyId} is already not assigned to an agent.`;
            return response;
        };

        // Remove agentId from the property and update database:
        property.agentId = null;
        await property.save();

        //Prepare and send response:
        response.status = 200;
        response.message = `Successful: Property ID ${propertyId} can now be re-assigned to another agent.`;
        response.data = property;
        return response;
    } catch (error) {
        console.log(error);
    }
};

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
};

async function updateProperty(propertyId, price, location, bedrooms, size, isSale, isRent){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }
        
        //Fetch the properties (both rent and sale) currently on the market:
        const property = await Property.findByPk(propertyId);
        
        //Validation
        if (!property) {
            response.status = 404;
            response.message = `Property not found for ID: ${propertyId}. Please add property instead.`;
            return response;
        };
        // update vehicle details and update database:
        property.price = price;
        property.location = location;
        property.noOfBedrooms = bedrooms;
        property.sizeInSqFt = size;
        property.isSale = isSale;
        property.isRent = isRent;
        await property.save();

        //Prepare and send response:
        response.status = 200;
        response.message = `Property for ID ${propertyId} successfully updated.`;
        response.data = property;
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

async function removeProperty(propertyId){
    try {
        const response = {
            status: null,
            message: null,
            data: null
        };

        //Fetch the property:
        const property = await Property.destroy({where: {id: propertyId}});
        
        //Region validation
        if (!property){ 
            response.status = 404;
            response.message = `Property not found for ID: ${propertyId}`;
            return response;
        };
        response.status= 200;
        response.message = `Property ${propertyId} is successfully deleted.`;
        return response;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function getLatestProperties(createdAtDate){
    try{
       
    // 1. Draw data from "created_at" in table
    // 2. Retreive latest dates and time
    // 3. Sort out and display to client
    const results = await Property.findAll({
        order: [['createdAt', 'DESC']],
        limit: 2
    });

    console.log("Property.createdAt()", JSON.stringify(results));
    
        return results;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function searchPropertiesPrice(price){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }

        const propertyData = [];
        const property = await Property.findAll();
  
        for (let i = 0; i < property.length; i++) {
            if (property[i].price === price) { 
                propertyData.push(property[i])
                response.data = propertyData; 
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

async function searchPropertiesRent(isRent){
    const booleanIsRent = JSON.parse(isRent);
    try{
        const response = {
        status: null,
        message: null,
        data: null
        }

        const property = await Property.findAll({where: {isRent: booleanIsRent}});
        response.data = property; 
                    
        if(response.data === null) {
            response.status = 404;
            response.message = `Property with isRent ${isRent} is not found.`;
            }
            else {
            response.status = 200;
            response.message = `Display a list of properties with isRent ${isRent}.`;
            }
                    
            return response;
            
            } catch(error) {
                console.log(error);
                throw error;
            }
        }

async function searchPropertiesSale(isSale){
    const booleanIsSale = JSON.parse(isSale);
    try{
        const response = {
        status: null,
        message: null,
        data: null
        }
        
        const property = await Property.findAll({where: {isSale: booleanIsSale}});
        response.data = property; 
                            
        if(response.data === null) {
            response.status = 404;
            response.message = `Property with isSale ${isSale} is not found.`;
        }
        else {
            response.status = 200;
            response.message = `Display a list of properties with isSale ${isSale}.`;
        }
                            
        return response;
                    
        } catch(error) {
            console.log(error);
            throw error;
        }
}

async function getById(id){
    try{
        return await Property.findByPk(id);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function getAll(){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        };

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
    associate,
    dissociate,
    updateProperty,
    removeProperty,
    getLatestProperties,
    searchPropertiesPrice,
    searchPropertiesRent,
    searchPropertiesSale,
    // getById,
    getAll,
};