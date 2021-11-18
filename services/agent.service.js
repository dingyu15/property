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
}

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
}

async function updateAccount(email){
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
}

async function removeAccount(email, password){
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
}

async function getById(id){
    try{
        return await Agent.findByPk(id);
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
    getById,
    getAll,
};
