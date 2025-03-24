const express = require("express");
const usermodel = require("../Models/usersSchema");
const db = require("../Config/config");
const Razorpay = require('razorpay')
require('dotenv').config()

const razorpayInstance = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    secrete_key : process.env.RAZORPAY_SECRET
})

const allUsers = async(req, res) => {
    try{
        const allusers = await usermodel.find();
        res.json(allusers)
    }catch (err){
        res.status(500).json("Internal server error")

    }

};

const payment = async (req,res)=>{
    try{
        const paymentData = await res.json("payments")
    }catch(err){
        console.log(err);
    }

}

module.exports = { allUsers,payment };
