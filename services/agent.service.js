const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secret} = require("../constants");
const {Agent} = require("../models");


async function signup(email, password){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }
        
        //Add business logic here (include bcrypt):



         
            
        response.status= 200;
        response.message = `User account ${email} successfully registered.`;
        return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function login(email, password){
    try {
        const response = {
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
        const response = {
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
        const response = {
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
        return await Agent.findAll();
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
