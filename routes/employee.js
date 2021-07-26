const express = require('express')
const empoyeecontroller = require('../controllers/employee')

const api = express.Router()

api.all('/employees',empoyeecontroller.createorgetemployees)
api.get('/employees/:id',empoyeecontroller.getemployeebyid)

module.exports = api