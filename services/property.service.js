const {Property, Agent, Customer} = require("../models/index.js");

async function associate(propertyId, agentId) {
    try {
        const result = {
            message: null,
            status: null,
            data: null,
        };

        //Fetch the property and agent:
        const property = await Property.findByPk(propertyId);
        const agent = await Agent.findByPk(agentId);
        
        //validation
        if (!property){
            result.status = 404;
            result.message = `Property not found for ID: ${propertyId}`;
            return result;
        }
        
        if (property.agentId) {
            result.status = 400;
            result.message = "Another agent is already in charge of this property.";
            return result;
        }

        if (!agent){ 
            //Error: No agent 
            result.status = 404;
            result.message = `Agent not found for ID: ${agentId}`;
            return result;
        }; 

        // Add agentId to the property and update database:
        property.agentId = agentId;
        await property.save();

        //Prepare and send response:
        result.message = `Property ID ${propertyId} has been assigned to agent ID ${agentId} successfully.`;
        result.status = 200;
        result.data = property;
        return result;
    } catch (error) {
        console.log(error);
    }
};

async function dissociate(propertyId) {
    try {
        const result = {
            message: null,
            status: null,
            data: null,
        };

        //Fetch the property:
        const property = await Property.findByPk(propertyId);
        
        //validation
        if (!property){
            result.status = 404;
            result.message = `Property not found for ID: ${propertyId}`;
            return result;
        };
        if (!property.agentId) {
            result.status = 400;
            result.message = `Error: Property ID ${propertyId} is already not assigned to an agent.`;
            return result;
        };

        // Remove agentId from the property and update database:
        property.agentId = null;
        await property.save();

        //Prepare and send response:
        result.status = 200;
        result.message = `Successful: Property ID ${propertyId} can now be re-assigned to another agent.`;
        result.data = property;
        return result;
    } catch (error) {
        console.log(error);
    }
};

async function addProperty(price, location, bedrooms, size, isSale, isRent){
    try{
        const result = {
            status: null,
            message: null,
            data: null
        }
        
        //Fetch the properties (both rent and sale) currently on the market:
        const property = await Property.findOne({where: {price, location, noOfBedrooms: bedrooms, sizeInSqFt: size}});
        
        //Validation
        if (property) {
            result.status = 400;
            result.message = `Property ${property.id} already exists. Update property instead.`;
            return result;
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
        result.message = `Property ${newProperty.id} added successfully.`;
        result.status = 200;
        result.data = newProperty;
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

async function updateProperty(propertyId, price, location, bedrooms, size, isSale, isRent){
    try{
        const result = {
            status: null,
            message: null,
            data: null
        }
        
        //Fetch the properties (both rent and sale) currently on the market:
        const property = await Property.findByPk(propertyId);
        
        //Validation
        if (!property) {
            result.status = 404;
            result.message = `Property not found for ID: ${propertyId}. Please add property instead.`;
            return result;
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
        result.status = 200;
        result.message = `Property for ID ${propertyId} successfully updated.`;
        result.data = property;
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

async function removeProperty(propertyId){
    try {
        const result = {
            status: null,
            message: null,
            data: null
        };

        //Fetch the property:
        const property = await Property.destroy({where: {id: propertyId}});
        
        //Region validation
        if (!property){ 
            result.status = 404;
            result.message = `Property not found for ID: ${propertyId}`;
            return result;
        };
        result.status= 200;
        result.message = `Property ${propertyId} is successfully deleted.`;
        return result;
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
    const result = await Property.findAll({
        order: [['createdAt', 'DESC']],
        limit: 2
    });   
        return result;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function searchPropertiesPrice(price){
    try{
        const result = {
            status: null,
            message: null,
            data: null
        }

        const propertyData = [];
        const property = await Property.findAll();
  
        for (let i = 0; i < property.length; i++) {
            if (property[i].price === price) { 
                propertyData.push(property[i])
                result.data = propertyData; 
            }
        }
        
        if(result.data === null) {
            result.status = 404;
            result.message = `Property with price $${price} is not found.`;
        }
        else {
            result.status = 200;
            result.message = `Display a list of properties with price $${price}.`;
        }
        
        return result;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function searchPropertiesRent(isRent){
    const booleanIsRent = JSON.parse(isRent);
    try{
        const result = {
        status: null,
        message: null,
        data: null
        }

        const property = await Property.findAll({where: {isRent: booleanIsRent}});
        result.data = property; 
                    
        if(result.data === null) {
            result.status = 404;
            result.message = `Property with isRent ${isRent} is not found.`;
            }
            else {
            result.status = 200;
            result.message = `Display a list of properties with isRent ${isRent}.`;
            }
                    
            return result;
            
            } catch(error) {
                console.log(error);
                throw error;
            }
        }

async function searchPropertiesSale(isSale){
    const booleanIsSale = JSON.parse(isSale);
    try{
        const result = {
        status: null,
        message: null,
        data: null
        }
        
        const property = await Property.findAll({where: {isSale: booleanIsSale}});
        result.data = property; 
                            
        if(result.data === null) {
            result.status = 404;
            result.message = `Property with isSale ${isSale} is not found.`;
        }
        else {
            result.status = 200;
            result.message = `Display a list of properties with isSale ${isSale}.`;
        }
                            
        return result;
                    
        } catch(error) {
            console.log(error);
            throw error;
        }
}

async function getById(id){
    try{
        const result = {
            status: null,
            message: null,
            data: null
            };
        const property = await Property.findByPk(id);
                                
        if(!property) {
            result.status = 404;
            result.message = `Property number ${id} is not found.`;
            return result;
        }

        result.status = 200;
        result.message = `Property ${id} details`;
        result.data = property;
        return result;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function getAll(){
    try{
        const result = {
            status: null,
            message: null,
            data: null
        };

        //Fetch the property & associated agent(+ customers):
        const property = await Property.findAll({include:[{model:Agent, as:"agent"}, {model:Customer, as:"customer"}]});

        //Region validation
        if (!property) {
            result.status = 200;
            result.message = "There are no properties stored in database";
            return result;
        };
        if (property) {
            result.status = 200;
            result.message = "List of properties in database with agents-in-charge and interested customers";
            result.data = property;
            return result;
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
    getById,
    getAll,
};