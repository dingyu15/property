const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secret} = require("../constants");
const {Customer} = require("../models");


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
        return await Customer.findByPk(id);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function getAll(){
    try{
        return await Customer.findAll();
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    signup,
    login,
    updateAccount,
    removeAccount,
    getById,
    getAll,
};
