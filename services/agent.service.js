const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secret} = require("../constants");
const {Agent} = require("../models");


async function signup(email, password){
    try{
        const result = {
            status: null,
            message: null,
            data: null
        }
        
        //Add business logic here (include bcrypt):



         
            
        result.status= 200;
        result.message = `User account ${email} successfully registered.`;
        return result;

    } catch (error) {
        console.log(error);
        throw error;
    }
};

async function login(email, password){
    try {
        const result = {
            status: null,
            message: null,
            data: null
        }
       
        //Add business logic here (include jwt):









    } catch(error) {
        console.log(error);
        throw error;
    }
};

async function findBySpecialty(searchParameter){
    try{
        const result = {
            status: null,
            message: null,
            data: null
        }

        if(searchParameter !== 'hdb'){
            const specialty = searchParameter[0].toUpperCase()+searchParameter.slice(1);
            const agent= await Agent.findAll({where: {specialty}});
            if(!agent) {
                result.status = 404;
                result.message = `No agent found in charge of ${searchParameter} properties.`;
                }
    
            result.status = 200;
            result.message = `Agent(s) in charge of ${searchParameter} properties.`;         
            result.data = agent;           
            return result;
        } else  {
            const specialty = searchParameter.toUpperCase();
            const agent= await Agent.findAll({where: {specialty}});
            if(!agent) {
                result.status = 404;
                result.message = `No agent found in charge of ${specialty} properties.`;
                }

            result.status = 200;
            result.message = `Agent(s) in charge of ${specialty} properties.`;         
            result.data = agent;           
            return result;
        }
    } catch(error){
        console.log(error);
        throw error;
    }
};

async function findByRegion(searchParameter){
    try{
        const result = {
            status: null,
            message: null,
            data: null
        }
        const region = searchParameter[0].toUpperCase()+searchParameter.slice(1);
        const agent= await Agent.findAll({where: {region}});

        if(!agent) {
            result.status = 404;
            result.message = `No agent found for ${searchParameter} region.`;
            }

        result.status = 200;
        result.message = `Agent(s) in charge of ${searchParameter} region`;         
        result.data = agent;           
        return result;
    } catch(error){
        console.log(error);
        throw error;
    }
};

async function getById(id){
    try{
        const result = {
            status: null,
            message: null,
            data: null
            };
        const agent = await Agent.findByPk(id);
                                
        if(!agent) {
            result.status = 404;
            result.message = `Agent number ${id} is not found.`;
            return result;
        }

        result.status = 200;
        result.message = `Agent ${id} details`;
        result.data = agent;
        return result;
    } catch(error) {
        console.log(error);
        throw error;
    }
};

async function getAll(){
    try{
        const result = {
            status: null,
            message: null,
            data: null
        };

        //Fetch all agent:
        const agent = await Agent.findAll();

        //validation:
        if (!agent) {
            result.status = 200;
            result.message = "There are no agents stored in database";
            return result;
        }
        result.status = 200;
        result.message = "List of agents stored in database";
        result.data = agent;
        return result;
    } catch(error) {
        console.log(error);
        throw error;
    }
};



module.exports = {
    signup,
    login,
    findBySpecialty,
    findByRegion,
    getById,
    getAll,
};
