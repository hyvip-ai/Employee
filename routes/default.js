const express = require('express')
const api = express.Router()
const defaultControllers = require('../controllers/default')
api.get('/status',defaultControllers.status)
module.exports =  api