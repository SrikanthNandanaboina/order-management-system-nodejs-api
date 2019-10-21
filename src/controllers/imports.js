const db = require('../../models/index');
const constants = require('../constants/messages');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(constants.secretKey.secretKey);
const jwt = require('jsonwebtoken');
const userModel = require('../models/usersModel').user;
const orderModel = require('../models/ordersModel').order;

module.exports = { db, cryptr, jwt, constants, userModel, orderModel }